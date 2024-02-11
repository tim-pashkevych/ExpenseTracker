import { Controller, useForm } from "react-hook-form"
import MaskedTextInput from "react-text-mask"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export const DatePickerFormField = ({ value = Date(), onChange }) => {
  const { control } = useForm()

  return (
    <Controller
      control={control}
      name='ReactDatepicker'
      defaultValue={value}
      render={({ field }) => (
        <ReactDatePicker
          className='input'
          onChange={event => {
            field.onChange(event)
            onChange(event)
          }}
          selected={field.value}
          maxDate={new Date()}
          dateFormat='dd/MM/yyyy'
          customInput={
            <MaskedTextInput
              value={field.value}
              type='text'
              placeholder='dd/mm/yyyy'
              showMask={true}
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
            />
          }
        />
      )}
    />
  )
}
