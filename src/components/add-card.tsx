// import { footballs } from '../Data/footballs';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { ICard } from '../types/i-card';
// import { ICard } from 'types/i-card';
import '../styles/add-card.css';
import { footballs } from '../Data/footballs';
// import Header from './utils/header';
// import Cards from './utils/cards';

// export type TProps = TPropsObj | Readonly<TPropsObj>;
// export type TPropsObj = {
//   [key: string]: string;
// };

type FormValues = {
  name: string;
  surename: string;
  club: string;
  flag: string;
  img: FileList;
  date: string;
  leg: string;
  check: boolean;
};
function AddCard() {
  function uploadImage(file: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      if (this.result && localStorage) {
        localStorage.setItem(file.name, this.result.toString());
      } else {
        alert('oops');
      }
    });
    reader.readAsDataURL(file);
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
    const arrCards: Array<ICard> = localStorage.cards ? JSON.parse(localStorage.cards) : footballs;

    const files = data.img;
    const fileListAsArray = files ? Array.from([...files]) : [];
    const objectImg: Blob = fileListAsArray[0];

    uploadImage(objectImg);
    arrCards.push({
      name: data.name + ' ' + data.surename,
      photo: objectImg.name,
      flag: data.flag,
      club: data.club,
      born: data.date,
      leg: 'R',
      check: data.check,
    });
    localStorage.cards = JSON.stringify(arrCards);
    alert('New card  created');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="legend">Input name:</legend>

          <input
            {...register('name', {
              required: ' field is required',
              minLength: { value: 2, message: 'min 2 chars' },
            })}
          />

          <div className="error">{errors?.name && <p>{errors?.name?.message || 'error'}:</p>}</div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="legend">Input name:</legend>
          <input
            {...register('surename', {
              required: ' field is required',
              minLength: { value: 2, message: 'min 2 chars' },
            })}
          />
          <div className="error">
            {errors?.surename && <p>{errors?.surename?.message || 'error'}:</p>}
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Input club:</legend>
          <input
            {...register('club', {
              required: ' field is required',
              minLength: { value: 2, message: 'min 2 chars' },
            })}
          />
          <div className="error">{errors?.club && <p>{errors?.club?.message || 'error'}:</p>}</div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Select country:</legend>

          <select
            {...register('flag', {
              required: ' field is required',
            })}
          >
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
          <div className="error">{errors?.flag && <p>{errors?.flag?.message || 'error'}:</p>}</div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Upload file:</legend>
          <input
            {...register('img', {
              required: ' field is required',
            })}
            type="file"
            accept="image/*"
            multiple
          />
          <div className="error">{errors?.img && <p>{errors?.img?.message || 'error'}:</p>}</div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Date of born:</legend>
          <input
            {...register('date', {
              required: ' field is required',
            })}
            type="date"
          ></input>
          <div className="error">{errors?.date && <p>{errors?.date?.message || 'error'}:</p>}</div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Select leg of player:</legend>
          <div>
            <label>Right</label>
            <input
              {...register('leg', {
                required: ' field is required',
              })}
              type="radio"
              value="R"
              defaultChecked={false}
            />
            <label>Left</label>
            <input {...register('leg')} type="radio" value="L" defaultChecked={false} />
          </div>
          <div className="error">{errors?.leg && <p>{errors?.leg?.message || 'error'}:</p>}</div>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="legend">Show current card:</legend>
          <label>
            Yes
            <input
              {...register('check', {
                required: ' field is required',
              })}
              type="checkbox"
            />
          </label>
          <div className="error">
            {errors?.check && <p>{errors?.check?.message || 'error'}:</p>}
          </div>
        </fieldset>

        <input type="submit"></input>
      </form>
    </div>
  );
}

// class AddCard extends React.Component<TProps, ICard> {
//   inputName: React.RefObject<HTMLInputElement>;
//   inputSureName: React.RefObject<HTMLInputElement>;
//   inputClub: React.RefObject<HTMLInputElement>;
//   inputFlag: React.RefObject<HTMLSelectElement>;
//   inputDate: React.RefObject<HTMLInputElement>;
//   inputFile: React.RefObject<HTMLInputElement>;
//   inputCheck: React.RefObject<HTMLInputElement>;
//   inputLLeg: React.RefObject<HTMLInputElement>;
//   inputRLeg: React.RefObject<HTMLInputElement>;

//   constructor(props: TProps) {
//     super(props);

//     this.inputName = React.createRef();
//     this.inputName = React.createRef();
//     this.inputSureName = React.createRef();
//     this.inputClub = React.createRef();
//     this.inputFlag = React.createRef();
//     this.inputFile = React.createRef();
//     this.inputDate = React.createRef();
//     this.inputCheck = React.createRef();
//     this.inputLLeg = React.createRef();
//     this.inputRLeg = React.createRef();
//     this.state = { name: '', photo: '', flag: '', club: '', born: '', leg: '', check: false };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   uploadImage(file: Blob) {
//     const reader = new FileReader();
//     reader.addEventListener('load', function () {
//       if (this.result && localStorage) {
//         localStorage.setItem(file.name, this.result.toString());
//       } else {
//         alert('oops');
//       }
//     });
//     reader.readAsDataURL(file);
//   }
//   anameValid(name: string) {
//     const letters = /^[A-Za-z]+$/;
//     if (name.match(letters) && name[0] === name[0].toUpperCase()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   handleSubmit(event: FormEvent) {
//     const arrCards: Array<ICard> = localStorage.cards ? JSON.parse(localStorage.cards) : footballs;

//     const files: FileList | null | undefined = this.inputFile.current?.files;
//     const fileListAsArray = files ? Array.from([...files]) : [];
//     const objectImg: Blob = fileListAsArray[0];

//     const nameValid = this.inputName.current
//       ? this.anameValid(this.inputName.current?.value)
//       : false;
//     const sureNameValid = this.inputSureName.current
//       ? this.anameValid(this.inputSureName.current?.value)
//       : false;
//     if (nameValid && sureNameValid) {
//       this.uploadImage(objectImg);
//       arrCards.push({
//         name: this.inputName.current?.value + ' ' + this.inputSureName.current?.value,
//         photo: objectImg.name,
//         flag: this.inputFlag.current?.value,
//         club: this.inputClub.current?.value,
//         born: this.inputDate.current?.value,
//         leg: this.inputLLeg.current?.checked ? this.inputLLeg.current?.value : 'R',
//         check: this.inputCheck.current?.checked,
//       });
//       localStorage.cards = JSON.stringify(arrCards);
//       alert('New card  created');
//     } else {
//       event.preventDefault();
//       alert(
//         'Name or surename incorrect (the name must contain only English letters and start with a capital letter)'
//       );
//     }
//   }
//   view() {
//     const files: FileList | null | undefined = this.inputFile.current?.files;
//     const fileListAsArray = files ? Array.from([...files]) : [];
//     const objectImg: Blob = fileListAsArray[0];
//     const pathImg = URL.createObjectURL(objectImg);
//     this.setState({
//       name: this.inputName.current?.value + ' ' + this.inputSureName.current?.value,
//       club: this.inputClub.current?.value,
//       check: this.inputCheck.current?.checked,
//       photo: pathImg,
//       flag: this.inputFlag.current?.value,
//       born: this.inputDate.current?.value,
//       leg: this.inputLLeg.current?.checked ? this.inputLLeg.current?.value : 'R',
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <form className="addcard" onSubmit={this.handleSubmit}>
//           <fieldset className="fieldset">
//             <legend className="legend">Input name:</legend>

//             <input required type="text" ref={this.inputName} />
//           </fieldset>
//           <fieldset className="fieldset">
//             <legend className="legend">Input surename:</legend>

//             <input required type="text" ref={this.inputSureName} />
//           </fieldset>
//           <fieldset className="fieldset">
//             <legend className="legend">Input club:</legend>

//             <input required type="text" ref={this.inputClub} />
//           </fieldset>
//           <fieldset className="fieldset">
//             <legend className="legend">Select country:</legend>

//             <select required ref={this.inputFlag}>
//               <option value="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg">
//                 England
//               </option>
//               <option value="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png">
//                 France
//               </option>
//               <option value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEWuHCn///8jRYywGyixGySCBhr/9P76/v4lRYkFL2gfR439//0hRY4FMGMfR5AhRJNq9ChhAAABUklEQVR4nO3bu2oDMRBAUXnz2GQT2///t8aFIauLwSaBNOcUgmkGcVGrMQAAAAAAAAAAAAAAAAAAAOCHF2bjldl4YzbemY2V2fhiNg7MNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qTGYV0P1w/pt+ORYX1k+M3W/73R+GTneDyOjZ3T6TS+2Tmfz+ODnWVZxrJty/XN3I5Hhu3O8PSie1v/bNHTW6/GwkyT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNKkLfI4VUnO+x18AAAAASUVORK5CYII=">
//                 Nederland
//               </option>
//               <option value="https://flagof.ru/wp-content/uploads/2018/10/portugal-flag-194-p.jpg">
//                 Portugal
//               </option>
//             </select>
//           </fieldset>
//           <fieldset className="fieldset">
//             <legend className="legend">Upload file:</legend>
//             <input required type="file" accept="image/*" multiple ref={this.inputFile} />
//           </fieldset>
//           <fieldset className="fieldset">
//             <legend className="legend">Date of born:</legend>
//             <input required type="date" ref={this.inputDate}></input>
//           </fieldset>

//           <fieldset className="fieldset">
//             <legend className="legend">Select leg of player:</legend>
//             <div>
//               <label>Right</label>
//               <input required type="radio" value="R" defaultChecked={false} ref={this.inputRLeg} />
//               <label>Left</label>
//               <input type="radio" value="L" defaultChecked={false} ref={this.inputLLeg} />
//             </div>
//           </fieldset>
//           <fieldset className="fieldset">
//             <legend className="legend">Show current card:</legend>
//             <label>
//               Yes
//               <input onChange={() => this.view()} required type="checkbox" ref={this.inputCheck} />
//             </label>
//           </fieldset>

//           <div style={{ display: this.state.check ? 'flex' : 'none' }} className="preview">
//             <div className="card">
//               <div className="card-photo-frame">
//                 <img className="card-photo" src={this.state.photo}></img>
//                 <div className="card-flag">
//                   <img className="card-img" src={this.state.flag}></img>
//                 </div>
//                 <div className="card-date">{this.state.born}</div>
//                 <div className="foot">{this.state.leg}</div>
//               </div>
//               <div className="card-info">
//                 {this.state.name}
//                 <React.Fragment>
//                   <br />
//                 </React.Fragment>
//                 {this.state.club}
//               </div>
//             </div>
//           </div>
//           <input className="btn" type="submit" value="Create" />
//         </form>
//         <Cards />
//       </div>
//     );
//   }
// }
export default AddCard;
