export interface IInitialRadioButton {
  name: string;
  clicked: boolean;
}
export interface IForm {
  /** user name. */
  name: string;
  /** user email. */
  email: string;
  /** user password. */
  password: any;
  /** country. */
  country: string;
  /** user gender. */
  gender: string;
  /** acceptance of conditions. */
  accept: boolean | string;
}
