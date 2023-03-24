import { footballs } from '../Data/footballs';
import React, { FormEvent } from 'react';
import { ICard } from 'types/i-card';
import '../styles/add-card.css';

export type TProps = TPropsObj | Readonly<TPropsObj>;
export type TPropsObj = {
  [key: string]: string;
};

class AddCard extends React.Component {
  inputName: React.RefObject<HTMLInputElement>;
  inputClub: React.RefObject<HTMLInputElement>;
  inputFlag: React.RefObject<HTMLSelectElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  inputCheck: React.RefObject<HTMLInputElement>;
  constructor(props: TProps) {
    super(props);
    this.state = { name: '', club: '', flag: '' };
    this.inputName = React.createRef();
    this.inputClub = React.createRef();
    this.inputFlag = React.createRef();
    this.inputFile = React.createRef();
    this.inputDate = React.createRef();
    this.inputCheck = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uploadImage(file: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      if (this.result && localStorage) {
        localStorage.setItem(file.name, this.result.toString());
      } else {
        alert();
      }
    });
    reader.readAsDataURL(file);
  }
  handleSubmit(event: FormEvent) {
    const arrCards: Array<ICard> = localStorage.cards ? JSON.parse(localStorage.cards) : footballs;

    const files: FileList | null | undefined = this.inputFile.current?.files;
    const fileListAsArray = files ? Array.from([...files]) : [];
    const objectImg: Blob = fileListAsArray[0];
    this.uploadImage(objectImg);
    arrCards.push({
      name: this.inputName.current?.value,
      photo: objectImg.name,
      flag: this.inputFlag.current?.value,
      club: this.inputClub.current?.value,
      born: this.inputDate.current?.value,
    });
    localStorage.cards = JSON.stringify(arrCards);

    alert('Отправленн файл: ' + URL.createObjectURL(objectImg));
    event.preventDefault();
  }

  render() {
    return (
      <form className="addcard" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputName} />
        </label>
        <label>
          Club:
          <input type="text" ref={this.inputClub} />
        </label>
        <label>
          Country:
          <select ref={this.inputFlag}>
            <option value="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg">
              England
            </option>
            <option value="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png">
              France
            </option>
            <option value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEWuHCn///8jRYywGyixGySCBhr/9P76/v4lRYkFL2gfR439//0hRY4FMGMfR5AhRJNq9ChhAAABUklEQVR4nO3bu2oDMRBAUXnz2GQT2///t8aFIauLwSaBNOcUgmkGcVGrMQAAAAAAAAAAAAAAAAAAAOCHF2bjldl4YzbemY2V2fhiNg7MNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qTGYV0P1w/pt+ORYX1k+M3W/73R+GTneDyOjZ3T6TS+2Tmfz+ODnWVZxrJty/XN3I5Hhu3O8PSie1v/bNHTW6/GwkyT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNKkLfI4VUnO+x18AAAAASUVORK5CYII=">
              Nederland
            </option>
            <option value="https://flagof.ru/wp-content/uploads/2018/10/portugal-flag-194-p.jpg">
              Portugal
            </option>
          </select>
        </label>
        <label>
          Upload file:
          <input type="file" accept="image/*" multiple ref={this.inputFile} />
        </label>
        <label>
          <input type="date" defaultValue="2017-06-01" ref={this.inputDate}></input>
        </label>
        <label>
          Are you good man?:
          <input type="checkbox" ref={this.inputCheck} />
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
export default AddCard;
