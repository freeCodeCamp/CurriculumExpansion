import { ChangeEvent, useState } from "react";
import "./App.css";
import { Field } from "./Field";

export function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [objective, setObjective] = useState("");
  const [degree, setDegree] = useState("");
  const [gradYear, setGradYear] = useState(0);

  function handleUpdateName(e: ChangeEvent) {
    setName((e.target as HTMLInputElement).value);
  }

  function handleUpdateEmail(e: ChangeEvent) {
    setEmail((e.target as HTMLInputElement).value);
  }

  function handleUpdatePhone(e: ChangeEvent) {
    setPhone((e.target as HTMLInputElement).value);
  }

  function handleUpdateObjective(e: ChangeEvent) {
    setObjective((e.target as HTMLInputElement).value);
  }

  function handleUpdateDegree(e: ChangeEvent) {
    setDegree((e.target as HTMLInputElement).value);
  }

  function handleUpdateGradYear(e: ChangeEvent) {
    const gradYear = parseInt((e.target as HTMLInputElement).value);
    const cutOffYear = 1976;
    if (Number.isSafeInteger(gradYear) && gradYear > cutOffYear) {
      setGradYear(parseInt((e.target as HTMLInputElement).value));
    } else {
      // TODO: add validation
    }
  }

  return (
    <div className="content">
      <h2>Personal Information</h2>
      <form>
        <Field
          onChange={handleUpdateName}
          labelText={"Name"}
          fieldType={"text"}
        />

        <Field
          onChange={handleUpdateEmail}
          labelText={"Email"}
          fieldType={"email"}
        />
        <Field
          onChange={handleUpdatePhone}
          labelText={"Phone"}
          fieldType={"phone"}
        />
        <Field
          onChange={handleUpdateObjective}
          labelText={"Objective"}
          fieldType={"text"}
        />
        <Field
          onChange={handleUpdateDegree}
          labelText={"Degree"}
          fieldType={"text"}
        />
        <Field
          onChange={handleUpdateGradYear}
          labelText={"Degree"}
          fieldType={"text"}
        />
      </form>
      <article>
        <label>
          Name: <p id="name">{name}</p>
        </label>
        <label>
          Email: <p id="email">{email}</p>
        </label>
        <label>
          Phone: <p id="phone">{phone}</p>
        </label>
        <label>
          Objective: <p id="objective">{objective}</p>
        </label>
        <div>
          <label>
            Degree: <p id="degree">{degree}</p>
          </label>
          <label>
            Year: <p id="gradYear">{gradYear}</p>
          </label>
        </div>
      </article>
    </div>
  );
}
