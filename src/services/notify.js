import { Notify } from 'quasar'

const triggerPositive = (message) => {
    Notify.create({
      type: "positive",
      position: "bottom",
      message: message
    });
  };

  const triggerNegative = (message) => {
    Notify.create({
      type: "negative",
      position: "bottom",
      message: message
    });
  };

  export default {
      triggerPositive,
      triggerNegative
  }