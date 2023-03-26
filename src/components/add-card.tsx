import { footballs } from '../Data/footballs';
import React, { FormEvent } from 'react';
import { ICard } from 'types/i-card';
import '../styles/add-card.css';
import Header from './utils/header';

export type TProps = TPropsObj | Readonly<TPropsObj>;
export type TPropsObj = {
  [key: string]: string;
};

class AddCard extends React.Component<TProps, ICard> {
  inputName: React.RefObject<HTMLInputElement>;
  inputSureName: React.RefObject<HTMLInputElement>;
  inputClub: React.RefObject<HTMLInputElement>;
  inputFlag: React.RefObject<HTMLSelectElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  inputCheck: React.RefObject<HTMLInputElement>;
  inputLLeg: React.RefObject<HTMLInputElement>;
  inputRLeg: React.RefObject<HTMLInputElement>;

  constructor(props: TProps) {
    super(props);

    this.inputName = React.createRef();
    this.inputName = React.createRef();
    this.inputSureName = React.createRef();
    this.inputClub = React.createRef();
    this.inputFlag = React.createRef();
    this.inputFile = React.createRef();
    this.inputDate = React.createRef();
    this.inputCheck = React.createRef();
    this.inputLLeg = React.createRef();
    this.inputRLeg = React.createRef();
    this.state = { name: '', photo: '', flag: '', club: '', born: '', leg: '' };
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
  anameValid(name: string) {
    const letters = /^[A-Za-z]+$/;
    if (name.match(letters) && name[0] === name[0].toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit(event: FormEvent) {
    const arrCards: Array<ICard> = localStorage.cards ? JSON.parse(localStorage.cards) : footballs;

    const files: FileList | null | undefined = this.inputFile.current?.files;
    const fileListAsArray = files ? Array.from([...files]) : [];
    const objectImg: Blob = fileListAsArray[0];

    const nameValid = this.inputName.current
      ? this.anameValid(this.inputName.current?.value)
      : false;
    const sureNameValid = this.inputSureName.current
      ? this.anameValid(this.inputSureName.current?.value)
      : false;
    if (nameValid && sureNameValid) {
      this.uploadImage(objectImg);
      arrCards.push({
        name: this.inputName.current?.value + ' ' + this.inputSureName.current?.value,
        photo: objectImg.name,
        flag: this.inputFlag.current?.value,
        club: this.inputClub.current?.value,
        born: this.inputDate.current?.value,
        leg: this.inputLLeg.current?.checked ? this.inputLLeg.current?.value : 'R',
      });
      localStorage.cards = JSON.stringify(arrCards);
      alert('New card  created');
    } else {
      event.preventDefault();
      alert(
        'Name or surename incorrect (the name must contain only English letters and start with a capital letter)'
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        <form className="addcard" onSubmit={this.handleSubmit}>
          <fieldset className="fieldset">
            <legend className="legend">Input name:</legend>

            <input required type="text" ref={this.inputName} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">Input surename:</legend>

            <input required type="text" ref={this.inputSureName} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">Input club:</legend>

            <input required type="text" ref={this.inputClub} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">Select country:</legend>

            <select required ref={this.inputFlag}>
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
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">Upload file:</legend>
            <input required type="file" accept="image/*" multiple ref={this.inputFile} />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">Date of born:</legend>
            <input required type="date" ref={this.inputDate}></input>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">Are you good man?:</legend>
            <label>
              Yes
              <input required type="checkbox" ref={this.inputCheck} />
            </label>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="legend">Select leg of player:</legend>
            <div>
              <label>Right</label>
              <input
                required
                type="radio"
                name="radio"
                value="R"
                defaultChecked={false}
                ref={this.inputRLeg}
              />
              <label>Left</label>
              <input
                type="radio"
                name="radio"
                value="L"
                defaultChecked={false}
                ref={this.inputLLeg}
              />
            </div>
          </fieldset>
          <input type="submit" value="Create" />
        </form>
        {/* <h1>{this.state.message}</h1> */}
      </div>
    );
  }
}
export default AddCard;
