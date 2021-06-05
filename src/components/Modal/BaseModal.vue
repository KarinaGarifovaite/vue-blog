<template>
  <div class="backdrop" @click="$emit('close')">
    <dialog open>
      <slot></slot>
    </dialog>
  </div>
</template>

<script>
export default {
  props: ['open'],
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  padding: 35px 25px;
  background-color: white;
  z-index: 100;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: modal 0.5s ease-out;
}
dialog .buttons-wrapper {
  margin: 15px 0;
}

dialog .buttons-wrapper button.submit {
  margin: 5px;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(to right bottom, #a47e1b, #b69121, #dbb42c);
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 10px;
  transition: opacity 0.5s;
}

dialog .buttons-wrapper button.cancel {
  margin: 5px;
  font-size: 10px;
  font-family: inherit;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  border: 1px solid #a47e1b;
  border-radius: 5px;
  padding: 10px;
  transition: opacity 0.5s;
  color: #a47e1b;
}

dialog .buttons-wrapper button:hover {
  opacity: 0.7;
}

dialog h4 {
  font-size: 20px;
  font-weight: 300;
}

@keyframes modal {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
