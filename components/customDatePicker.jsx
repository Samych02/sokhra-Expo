import {Alert} from "react-native";
import DatePicker from "react-native-date-picker";
import React from "react";

const CustomDatePicker = ({open, setOpen, date, setDate}) => {
  return (
      <DatePicker
          title="Selectionner une date"
          confirmText="Confirmer"
          cancelText="Annuler"
          mode="date"
          minimumDate={new Date()}
          maximumDate={new Date("2030-12-31")}
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            if (date < new Date()) return Alert.alert("La date sélectionnée est inférieure à celle d' aujourd'hui")
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
      />
  )
}
export default CustomDatePicker;
