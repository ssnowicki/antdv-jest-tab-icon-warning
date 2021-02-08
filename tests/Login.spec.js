/* global describe, it, expect */
import { mount } from "@vue/test-utils";
import Login from "../src/components/Login.vue";
import Antd from "ant-design-vue";

describe("Login Success", () => {
  it("Blank creds", async () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [Antd],
        //stubs: ["a-tabs"],
        mocks: {
          $cookies: {
            isKey: () => false,
            get: (msg) => msg,
            set: (msg) => msg
          },
          $route: {
            params: {}
          }
        }
      },
      data() {
        return {
          input: {
            username: "",
            password: ""
          }
        };
      }
    });
    expect(wrapper).toBeTruthy();
  });
});
