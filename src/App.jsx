import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import styles from './styles/App.module.css';
import Display from './Display';
import Save from './Save.jsx'

const fieldArrayName = "array";

const App = () => {

    const { control, register, watch } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    });
    const { fields, append, remove } = useFieldArray({
      control,
      name: fieldArrayName,
      defaultValues: {
        [fieldArrayName]: []
      }
    });

        return <div className={styles.divWrapper} >
            <form className={styles.sidebar}>

            <div className={styles.save} >
            <Save />
            </div>
            <div className={styles.contact}>
            <label className={styles.infoTitle}>Personal Information</label>
            <label>Full Name</label>
            <input placeholder="Name" className={styles.input} {...register("name")} />
            <label>Email</label>
            <input placeholder="Email"  className={styles.input} {...register("email")} />
            <label>Phone Number</label>
            <input placeholder="Phone" className={styles.input} {...register("phone")} />
            <label>Address</label>
            <input placeholder="Address" className={styles.input} {...register("address")} />
            </div>
            {fields.map((field, index) => (
          <fieldset className={styles.fieldset} key={field.id}>
              <input className={styles.inputTitle}
                placeholder="Title"
                defaultValue={"Title"}
                {...register(`${fieldArrayName}.${index}.title`)}
              />
              {!watch(`${fieldArrayName}.${index}.section`) &&               
              <div className={styles.experienceInfo}>
                <label>
                Date Started / Ended
              </label>
                <input
                className={styles.input}
                placeholder="Date Started / Ended"
                defaultValue={"Date"}
                {...register(`${fieldArrayName}.${index}.date`)}
              />
              <label>
                Hours per week
              </label>
              <input
                className={styles.input}
                placeholder="Hours per week"
                defaultValue={"Hours"}
                {...register(`${fieldArrayName}.${index}.hours`)}
              />
              <label>
                Description
              </label>
              <textarea
                className={styles.input}
                placeholder="Description" 
                onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
                }}
                {...register(`${fieldArrayName}.${index}.description`)}
              />

              </div>
              }
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>

          </fieldset>
        ))}

      <div className={styles.buttonBar}>
      <button
          type="button"
          className={styles.addSection}
          onClick={() => {
            append({
              title: "",
              date: "",
              hours: "",
              description: "",
              section: true
            });
          }}
        >
          Add Section
        </button>
        <button
          type="button"
          className={styles.addSection}
          onClick={() => {
            append({
              title: "",
              date: "",
              hours: "",
              description: "",
              section: false
            });
          }}
        >
          Add Experience
        </button>

      </div>


        </form>
        <div className={styles.display} >
          <Display data={watch()}/>
        </div>

        
        </div>
}    

export default App;