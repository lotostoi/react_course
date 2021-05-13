<template>
  <div class="calc">
    <h1>{{ msg }}</h1>
    <div class="userInterface">
      <input v-model="lableValue" class="table" />
      <label for="viewKeyboard"
        ><input
          type="checkbox"
          name=""
          id="viewKeyboard"
          v-model="viewKeyboard"
        />Скрыть клавиатуру</label
      >
      <div class="keyboard">
        <div class="numbers" v-show="!this.viewKeyboard">
          <input
            type="button"
            class="numbersButton"
            v-for="item in numbersButton"
            v-bind:key="item"
            v-bind:value="item"
            @click="setNumber(item)"
          />
          <!-- <button 
            class="numbersButton"
            v-for="item in numbersButton"
            v-bind:key="item"
            @click="setNumber(item)"
          >
            {{ item }}
          </button> -->
          <!-- <button class="numbersButton" @click="setNumber($event)">7</button>
          <button class="numbersButton" @click="setNumber($event)">8</button>
          <button class="numbersButton" @click="setNumber($event)">9</button>
          <button class="numbersButton" @click="setNumber($event)">4</button>
          <button class="numbersButton" @click="setNumber($event)">5</button>
          <button class="numbersButton" @click="setNumber($event)">6</button>
          <button class="numbersButton" @click="setNumber($event)">1</button>
          <button class="numbersButton" @click="setNumber($event)">2</button>
          <button class="numbersButton" @click="setNumber($event)">3</button>
          <button class="numbersButton" @click="setNumber($event)">0</button>
          <button class="numbersButton" @click="setNumber($event)">.</button> -->
        </div>
        <div class="operations">
          <button
            class="operationsButton"
            v-for="item in operationsButton"
            v-bind:key="item"
            @click="operation(item)"
          >
            {{ item }}
          </button>
          <!-- <button class="operationsButton" @click="operation($event)">+</button>
          <button class="operationsButton" @click="operation($event)">-</button>
          <button class="operationsButton" @click="operation($event)">/</button>
          <button class="operationsButton" @click="operation($event)">*</button>
          <button class="operationsButton" @click="operation($event)">^</button>
          <button class="operationsButton" @click="operation($event)">
            div
          </button> -->
          <button class="operationsButton" @click="operation($event)">
            &lt;--
          </button>
          <button
            class="operationsButton"
            @click="
              () => {
                resetCalculator();
                this.lableValue = '';
              }
            "
          >
            reset
          </button>
          <button class="operationsButton" @click="result()">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator",
  props: {
    msg: String,
  },
  data: () => ({
    operand1: 0,
    operand2: 0,
    operationSelected: "",
    lableValue: "",
    viewKeyboard: false,
    numbersButton: ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."],
    operationsButton: ["+", "-", "/", "*", "^", "div"],
  }),
  methods: {
    resetCalculator: function () {
      this.operand1 = 0;
      this.operand2 = 0;
      this.operationSelected = "";
    },
    sectorCleared: function () {
      this.lableValue.pop();
      if (this.operationSelected === "") {
        this.operand1.pop();
      } else {
        this.operand2.pop();
      }
    },
    setNumber: function (item) {
      this.lableValue += item;
      if (this.operationSelected === "") {
        this.operand1 += item;
      } else {
        this.operand2 += item;
      }
    },
    // setNumber: function (event) {
    //   this.lableValue += event.target.textContent;
    //   if (this.operationSelected === "") {
    //     this.operand1 += event.target.textContent;
    //   } else {
    //     this.operand2 += event.target.textContent;
    //   }
    // },
    operation: function (item) {
      this.operationSelected = item;
      this.lableValue += item;
    },
    // operation: function (event) {
    //   this.operationSelected = event.target.textContent;
    //   this.lableValue += event.target.textContent;
    //   console.log(this.operationSelected);
    // },
    result: function () {
      if (this.operationSelected === "^") {
        this.lableValue = Math.pow(this.operand1, this.operand2);
      } else if (this.operationSelected === " div ") {
        this.lableValue =
          (this.operand1 - (this.operand1 % this.operand2)) / this.operand2;
      } else {
        this.lableValue = eval(
          this.lableValue
          // +this.operand1 + this.operationSelected + +this.operand2
        );
      }
      this.resetCalculator();
      this.operand1 = this.lableValue;
    },
    // viewKeyboard:function(){},
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calc {
  margin: 0 calc(50% - 150px) 0;
}
.table {
  width: 100%;
  margin-bottom: 30px;
}
.keyboard,
.numbers {
  display: flex;
}
.numbers {
  flex-wrap: wrap;
  max-width: 90%;
  justify-content: space-evenly;
  align-content: space-between;
  &Button {
    flex-basis: 30%;
    min-height: 22%;
  }
}
.operations {
  max-width: 15px;
  &Button {
    width: 100%;
  }
}
button {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
