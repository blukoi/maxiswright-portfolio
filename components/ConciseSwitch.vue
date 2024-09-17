<template>
    <div class="col-span-1 grid grid-cols-1 gap-4">
        <div class="w-full flex flex-row justify-between">
            <h1 class="font-title text-2xl text-grayDarkest">Concise</h1>
            <button class="w-12 h-6 rounded-full bg-transparent" @click="toggle">
                <label class="switch">
                    <input type="checkbox" :checked="value" @change="$emit('input', !value)">
                    <span class="slider button"></span>
                </label>
            </button>
        </div>
        <p class="ml-8 text-grayDarker font-main text-sm">To only see the highlights and most important information, keep the toggle <span class="font-bold">ON</span>. If you’d like to read about every step of the process, turn the toggle <span class="font-bold">OFF</span>.</p>
    </div>
</template>

<script>
export default {
  props: {
    value: Boolean // Accepts v-model's value
  },
  computed: {
    isConcise: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value); // This makes v-model work
      }
    }
  },
  methods: {
    toggle() {
      this.isConcise = !this.isConcise;
    }
  }
}
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
    cursor: none;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #505050;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 6px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 4px;
}

input:checked + .slider {
  background-color: #00AB8F;
}

input:focus + .slider {
  box-shadow: 0 0 1px #FFF;
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}
</style>

<!-- HOW TO USE

<ConciseSwitch v-model="isConcise"></ConciseSwitch>

<div v-if="isConcise">
    <p>Show this content when Concise is ON</p>
</div>

<div v-else>
    <p>Show this content when Concise is OFF</p>
</div>

data() {
    return {
        isConcise: true  // This controls the initial state of the toggle and content visibility
    };
}
        
    
    
 -->