import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { ICard } from '../types/i-card';
import '../styles/add-card.css';
import { footballs } from '../Data/footballs';
import Cards from './utils/cards';
import Header from './utils/header';

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
  const [upl, setUpl] = useState(false);
  function uploadImage(file: Blob) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      if (this.result && localStorage) {
        localStorage.setItem(file.name, this.result.toString());
        setUpl(!upl);
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
    });
    localStorage.cards = JSON.stringify(arrCards);
    alert('New card  created');
  };

  return (
    <div>
      <Header />
      <form className="addcard" onSubmit={handleSubmit(onSubmit)}>
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
          <legend className="legend">Input surename:</legend>
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

        <input className="btn" type="submit" value="create" />
      </form>
      <Cards />
    </div>
  );
}

export default AddCard;
