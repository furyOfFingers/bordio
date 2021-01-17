import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Input from "Components/Input/Input";
import Checkbox from "Components/Checkbox/Checkbox";
import RadioButton from "Components/RadioButton/RadioButton";
import Button from "Components/Button/Button";
import Select from "Components/Select/Select";
import { getAuth } from "Redux/authenticate";
import { IForm } from "Types/Types";
import {
  HeadText,
  WrapperAuthForm,
  WrapperRadioButton,
  CheckboxText,
  AHref,
} from "./styles";
import { Options } from "Constants/Select";
import { initialDataRadioButtons, initialAuthForm } from "./initialData";
import { RadioButtonText } from "Constants/RadioButton";

const AuthFormFormik = () => {
  const [accept, setAccept] = useState(false);
  const [form, setForm] = useState(initialAuthForm);
  const [radioButtons, setRadioButtons] = useState(initialDataRadioButtons);

  const dispatch = useDispatch();

  const onClickSendForm = (values: any) => {
    dispatch(getAuth({ ...form, ...values }));
  };

  const checkboxText = () => {
    return (
      <CheckboxText>
        Accept <AHref href="#">terms</AHref> and
        <AHref href="#">conditions</AHref>
      </CheckboxText>
    );
  };

  const onClickRadioButton = (name: string) => {
    const newRadioButtons = { ...radioButtons };
    const newForm: IForm = { ...form };

    newForm["gender"] = name;

    Object.keys(newRadioButtons).forEach((el: any, i: number) => {
      if (name === newRadioButtons[el].name) {
        newRadioButtons[i].clicked = true;
      } else {
        newRadioButtons[i].clicked = false;
      }
    });

    setForm(newForm);
    setRadioButtons(newRadioButtons);
  };

  const renderRadioButton = () => {
    console.log(form, "renderRadioButton");
    return RadioButtonText.map((el: string, i: number) => (
      <RadioButton
        key={i}
        text={el}
        name={el}
        onClick={() => onClickRadioButton(el)}
        checked={radioButtons[i].clicked}
      />
    ));
  };

  const onChangeAccept = () => {
    setAccept(!accept);
    setForm({ ...form, ["accept"]: !accept });
  };

  const onChangeSelect = (option: string) => {
    setForm({ ...form, ["country"]: option });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string()
          .email("Invalid email addresss")
          .required("Required"),
        password: Yup.string()
          .min(6, "At least 6 characters")
          .required("Required"),
      })}
      onSubmit={(values) => {
        onClickSendForm(values);
      }}
    >
      {(props) => (
        <Form>
          <WrapperAuthForm>
            <HeadText>Create a new account</HeadText>

            <Input placeholder="Enter your name" name="name" type="name" />

            <Input
              iconName="mail"
              placeholder="Email"
              name="email"
              type="email"
            />

            <Input
              iconName="lock"
              placeholder="Password"
              name="password"
              type="password"
            />

            <Select
              onChange={onChangeSelect}
              initial="Latvia"
              placeholder="Select country"
              options={Options}
              name="country"
              type="country"
            />

            <WrapperRadioButton>{renderRadioButton()}</WrapperRadioButton>

            <Checkbox
              text={checkboxText()}
              onChange={onChangeAccept}
              checked={accept}
            />

            <Button
              text="Sign up"
              disabled={!!props.dirty && !!props.isValid && accept}
            />
          </WrapperAuthForm>
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(AuthFormFormik);
