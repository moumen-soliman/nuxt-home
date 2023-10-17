<template>
  <div class="bg-blue-900 m-auto w-[300px] p-10 rounded-lg">
    <img
      src="@/assets/img/header/logo.png"
      class="h-10 mx-auto flex mb-10"
      alt="Sat7Plus Logo"
    />
    <Form
      class="flex flex-col w-full gap-5"
      :validation-schema="loginFormScheme"
      @submit="handleSubmit"
      :initial-values="initialValues"
      v-slot="{ errors: formErrors }"
    >
      <Field
        label="Email"
        name="email"
        type="email"
        class="p-2 rounded-lg"
        placeholder="email"
      />
      <ErrorMessage class="text-red-500" name="email" />

      <Field
        label="Password"
        name="password"
        type="password"
        placeholder="password"
        class="p-2 rounded-lg"
      />
      <ErrorMessage class="text-red-500" name="password" />

      <span v-if="errMsg" class="text-red-600">{{ errMsg }}</span>
      <button
        class="w-full bg-gray-900 text-white p-2 rounded-lg"
        type="submit"
      >
        Login
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import { v4 as uuidv4 } from 'uuid'
import { Field, Form, ErrorMessage } from 'vee-validate'
import { DEVICE_ID, loginFormScheme } from '@/constants'
import { LoginFormInput } from '@/types/Login'
import { configure } from 'vee-validate'
definePageMeta({
  middleware: 'auth',
})

const { isMobile } = useDevice()
const loginStore = useLoginStore()
const { signIn } = loginStore
const { isLoggedIn, errMsg } = storeToRefs(loginStore)
let device_id = null

// Set unique device id based on device
if (process.client) {
  device_id = localStorage.getItem(DEVICE_ID)
  if (!device_id) {
    localStorage.setItem(DEVICE_ID, uuidv4())
  }
}

const handleSubmit = (values: LoginFormInput) => {
  const data = {
    email: values.email,
    password: values.password,
    uniq_device_id: device_id,
    device_os: window.navigator.platform,
    device_type: isMobile ? 'mobile' : 'browser',
  }

  signIn(data)
}
</script>

<style scoped></style>
