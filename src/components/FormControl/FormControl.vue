<template>
  <div class="form__form-control">
    <label :for="inputId">{{ labelText }}</label>
    <input
      :type="inputType"
      :id="inputId"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      required: true,
    },
    inputId: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped>
.form__form-control {
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form__form-control label {
  margin: 15px;
}

.form__form-control input {
  border: none;
  border-bottom: 1px solid #a47e1b;
  width: 200px;
}

.form__form-control input:focus {
  outline: none;
  background: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

@media screen and (min-width: 768px) {
  .form__form-control input {
    font-size: 15px;
  }
}
</style>
