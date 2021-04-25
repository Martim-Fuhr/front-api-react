import axios from 'axios';

class Api {
  constructor() {
    this.baseURL = 'https://portfolio-martim-fuhr.herokuapp.com/'
  }

  async sendContact(name, email, phone, comment) {
    await axios({
      method: 'post',
      url: `${this.baseURL}/contact`,
      data: {
        name,
        email,
        phone,
        comment
      }
    })
  }
}

export default new Api();