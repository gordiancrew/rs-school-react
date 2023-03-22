import { footballs } from '../Data/footballs';
import React, { FormEvent } from 'react';
import { ICard } from 'types/i-card';

export type TProps = TPropsObj | Readonly<TPropsObj>;

export type TPropsObj = {
  [key: string]: string;
};

class AddCard extends React.Component {
  inputName: React.RefObject<HTMLInputElement>;
  inputClub: React.RefObject<HTMLInputElement>;
  constructor(props: TProps) {
    super(props);
    this.state = { name: '', club: '' };

    this.inputName = React.createRef();
    this.inputClub = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event: ChangeEvent) {
  //   this.setState({ name: (event.target as HTMLInputElement).value });
  // }

  handleSubmit(event: FormEvent) {
    const arrCards: Array<ICard> = localStorage.cards ? JSON.parse(localStorage.cards) : footballs;

    arrCards.push({
      name: this.inputName.current?.value,
      photo: 'eee',
      flag: 'iii',
      club: this.inputClub.current?.value,
    });

    localStorage.cards = JSON.stringify(arrCards);
    alert('Отправленное имя: ' + this.inputName.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" ref={this.inputName} />
        </label>
        <label>
          Имя:
          <input type="text" ref={this.inputClub} />
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
export default AddCard;
