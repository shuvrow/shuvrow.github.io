<template>
  <section id="contact-us" class="py-16 bg-white">
    <h2 class="text-3xl font-bold text-center mb-8">Contact Us</h2>
    <div class="max-w-lg mx-auto">
      <el-form @submit.prevent="submitForm">
        <el-form-item label="Your Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="What You Need">
          <el-input type="textarea" v-model="form.details"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">Send</el-button>
      </el-form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        details: ""
      }
    };
  },
  methods: {
    submitForm() {
      // Submit logic here
      console.log(this.form);
    }
  }
};
</script>
