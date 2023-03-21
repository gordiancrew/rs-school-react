import { footballs } from '../Data/footballs';
import React, { ChangeEvent, FormEvent } from 'react';
import { ICard } from 'types/i-card';

export type TProps = TPropsObj | Readonly<TPropsObj>;

export type TPropsObj = {
  [key: string]: string;
};

class AddCard extends React.Component {
  constructor(props: TProps) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent) {
    this.setState({ name: (event.target as HTMLInputElement).value });
  }

  handleSubmit(event: FormEvent) {
    alert('1');
    const arrCards: Array<ICard> = localStorage.cards ? JSON.parse(localStorage.cards) : footballs;
    alert('2');
    arrCards.push({ name: 'eee', photo: 'eee', flag: 'iii', club: 'eee' });
    alert('3');
    localStorage.cards = JSON.stringify(arrCards);
    alert('Отправленное имя: ' + (event.target as HTMLFormElement).name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            value={(this.state as HTMLInputElement).name}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
export default AddCard;
