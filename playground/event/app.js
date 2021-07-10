const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch:{
    name(value){
      this.fullname = value + ' ' + 'Teddy';
    }
  },
  computed: {
    // fullname(){
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Teddy';
    // }
  },
  methods: {
    outputFullName(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Teddy';
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted!');
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
