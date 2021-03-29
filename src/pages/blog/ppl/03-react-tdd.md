---
title: 'Blog#3 React TDD w/ Jest & Enzyme'
published: 2021-03-29
summary: Tutorial singkat bagaimana menerapkan TDD di React dengan bantuan Jest dan Enzyme.
layout: blog
---

Pandangan awal saya mengenai TDD tentang *frontend development* adalah *reduntdant*. "Mengapa saya perlu melakukan test untuk sesuatu yang dapat saya lihat secara langsung di browser?". Karena kuliah PPL mengharuskan saya untuk menerapkan TDD, saya mencoba mencari resource yang mudah dipahami untuk mempelajari penerapan TDD pada React dengan bantuan Jest dan Enzyme (library yang dipakai juga pada project TBCare yang saya kerjakan untuk kuliah ini). Berikut adalah resource yang saya dapatkan : [React TDD in 30 Minute - Test Driven Development with Jest and Enzyme](https://youtu.be/-bmdf1oATQo). Pada blog ini, saya akan menjelaskan apa yang akhirnya saya sadari mengenai penerapan TDD secara keseluruhan, dan sedikit penerapan teknis mengenai TDD pada React.

<div slot="toc">

- [Mengapa TDD?](#mengapa-tdd)
  - [\[+\] TDD sebagai workflow, bukan hambatan.](#-tdd-sebagai-workflow-bukan-hambatan)
  - [\[+\] Automated](#-automated)
  - [\[-\] Kadang membuat test lebih sulit daripada codingannya](#--kadang-membuat-test-lebih-sulit-daripada-codingannya)
- [React TDD dengan Jest dan Enzyme](#react-tdd-dengan-jest-dan-enzyme)
  - [Setup dan Instalasi](#setup-dan-instalasi)
  - [Definisikan task](#definisikan-task)
  - [TDD untuk Task 1](#tdd-untuk-task-1)
    - [Skeleton](#skeleton)
    - [Test](#test)
    - [Implementasi](#implementasi)
  - [TDD untuk Task 2](#tdd-untuk-task-2)
    - [Skeleton](#skeleton-1)
    - [Test](#test-1)
    - [Implementasi](#implementasi-1)
  - [Memasukkan ke Parent Component](#memasukkan-ke-parent-component)
    - [Test](#test-2)
    - [Implementasi](#implementasi-2)
  - [TDD untuk task 3 dan 4](#tdd-untuk-task-3-dan-4)

</div>

## Mengapa TDD?

*Test-driven Development* (selanjutnya saya singkat TDD) adalah suatu proses pengembangan *software* yang mana perlu merancang test terlebih dahulu sebelum memulai code. Pada bagian ini saya akan membagikan pandangan saya, pada bagian mana TDD membantu saya, dan pada bagian mana TDD menghambat saya. Tanda \[+\] artinya mengapa TDD membantu saya, dan tanda \[-\] artinya mengapa TDD menghambat saya.

### \[+\] TDD sebagai workflow, bukan hambatan.

Dari pengertian TDD sendiri bahkan kita mengetahui, TDD adalah sebuah proses. Tujuan utamanya adalah *code* yang ditulis sepenuhnya ter*cover* oleh *test*, sehingga tidak ada *unexpected behavior*. Menurut saya, *workflow* seperti ini sangatlah baik, mengapa? Saat membuat test, anda sebetulnya :

- merencanakan apa yang akan anda kerjakan, tanpa *code*.
- hanya perlu <u>berekspektasi</u> sebelum tenggelam dalam proses *coding* dan *bugfixing*

Lalu, pada fase coding anda berusaha memenuhi rencana dan ekspektasi anda lewat *code*. *Workflow* seperti ini membuat pekerjaan anda lebih jelas, terarah, dan dibatasi untuk satu task dalam satu kali workflow TDD.

### \[+\] Automated

Test yang nantinya anda buat akan dilakukan secara otomatis oleh mesin dalam waktu yang sangat singkat. Bayangkan jika anda sudah *move on* dari sebuah fitur, namun rekan sekerja anda tiba-tiba merubah *source code* yang anda buat tanpa ada *automated-test* dan ternyata menimbulkan *bug*, apakah anda akan langsung mengetahui masalahnya? Jika *automated-test*, nantinya mesin tempat anda mendeploy (atau CI/CD di *remote repository*) akan memberikan informasi bahwa test anda gagal karena beberapa hal.

### \[-\] Kadang membuat test lebih sulit daripada codingannya

Hambatan ini sering terjadi pada saya. Saya merasa membuat test lebih sulit daripada implementasi *code* yang perlu saya buat. Kadang saya menghabiskan waktu lebih banyak untuk membuat test dibanding *code*. Kesulitan ini terjadi bukan pada task yang sederhana, melainkan pada task yang sudah cukup rumit, task yang memerlukan *mock database*, *mock data fetching*, dan lain sebagainya. Dan sebagian besar waktu dihabiskan untuk browsing "bagaimana cara saya melakukan test ini untuk kasus [...] ya?". 

Karena alasan di atas saya menyimpulkan, bahwa mungkin saja salah satu hal yang membuat TDD sulit adalah tidak familiar dengan *tools* untuk membuat dan melakukan *test*nya. Bagian selanjutnya saya akan menjelaskan teknis-teknis dasar membuat test pada React dengan bantuan library Jest dan Enzyme.

## React TDD dengan Jest dan Enzyme

Sebelum masuk ke hal-hal teknis, mari daftarkan terlebih dahulu, apa saja yang perlu di*test* pada React.

- Component yang dibuat ter-*render* dengan baik tanpa masalah
- Component mengandung element-element yang lengkap sesuai ekspektasi
- Dynamic Behavior seperti *click event*, *hover event*, dan perubahan *state* berjalan dengan semestinya
- Fetching data dan data yang didapatkan sesuai dengan ekspektasi

Tentunya masih banyak lagi yang perlu di*test*, namun keempat hal di atas adalah yang umum ada di setiap aplikasi. Kebutuhan setiap aplikasi berbeda, namun setidaknya keempat hal di atas dapat memberikan anda gambaran mengenai apa saja yang perlu dipelajari secara umum.

### Setup dan Instalasi

Jika anda belum membuat React App, anda dapat membuat React App dengan script `create-react-app` atau cara lainnya yang anda sukai.

```console
npx create-react-app nama-app-anda
```

Selain itu anda perlu menginstall Jest dan Enzyme. Jest adalah library umum untuk TDD Javascript, tidak hanya React, namun Enzyme hanya dikhususkan untuk React dan berfungsi seperti jQuery API. Enzyme memudahkan kita untuk mengambil element dari React Component untuk nantinya di*test*. Jika anda menginstall React dengan `create-react-app`, anda tidak perlu menginstall Jest, hanya perly=u menginstall Enzyme, namun jika tidak, jalankan perintah berikut di *console* anda.

```console
npm i --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

Pada tahap ini anda bisa mengecek apakah Jest sudah terinstall dengan baik atau tidak dengan menjalankan

```console
npm run test
```

Seharusnya pada *console* atau *terminal* anda muncul keluaran seperti ini:

```
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

Jika tidak berjalan, mungkin saja dikarenakan anda belum memasukan script `test` pada file `package.json`. Jika memakai `create-react-app`, anda akan menemukan bagian `script` yang berisikan:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

Namun jika tidak menggunakan `create-react-app`, masukkan script berikut:

```json
// pada package.json di bagian script
"scripts": {
    // script-script anda sebelumnya
    "test": "jest",
},
```

Untuk instalasi Enzyme, jalankan perintah berikut:

```console
npm i --save-dev enzyme enzyme-adapter-react-16
```

Perintah di atas hanya berjalan untuk React versi 16, namun pada saat blog ini ditulis, React sudah ada di versi 17. Anda dapat memilih mengubah versi React pada `package.json`, atau memakai adapter yang tidak official, dengan perintah:

```console
npm i --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17
```

Langkah terakhir untuk setup adalah, melakukan konfigurasi test pada suatu file khusus yang telah disediakan `create-react-app` (jika tidak menggunakan, silakan buat sendiri) yaitu file `src/setupTests.js`.

```js
// setupTests.js

import '@testing-library/jest-dom';
import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // sesuaikan dengan adapter yang anda install

configure({ adapter: new Adapter() });
```

### Definisikan task

Sebelum anda membuat test dan mengimplementasikannya, anda perlu mendefinisikan *task* anda, hal apa yang anda inginkan. Untuk tulisan ini, saya memiliki beberapa task sebagai contoh.

1. Membuat halaman utama yang memiliki ucapan "Selamat Datang"
2. Memiliki 2 buah Button sebagai counter untuk counter1 dan counter2
3. Melakukan fetching ke API https://pokeapi.co/v2/pokemon?limit=0&offset=10
4. Menampilkan hasil fetch

### TDD untuk Task 1

#### Skeleton

```jsx
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

#### Test

```jsx
import { shallow } from 'enzyme';
import App from './App';

describe("Task 1: Page has a greetings element with 'Selamat datang' message", () => {
  it("render properly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  })

  it("there is a greetings element with 'Selamat Datang' message", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#greetings').text()).toBe("Selamat Datang");
  })
})
```

```console
 FAIL  src/App.test.js

  Task 1: Page has a greetings element with 'Selamat datang' message

    ✓ render properly (5 ms)

    ✕ there is a greetings element with 'Selamat Datang' message (5 ms)



  ● Task 1: Page has an greetings element with 'Selamat datang' message › there is an greetings element with 'Selamat Datang' message

    Method “text” is meant to be run on 1 node. 0 found instead.

      10 |   it("there is an greetings element with 'Selamat Datang' message", () => {
      11 |     const wrapper = shallow(<App />);
    > 12 |     expect(wrapper.find('#greetings').text()).toBe("Selamat Datang");
         |                                       ^
      13 |   })
      14 | })

      at ShallowWrapper.single (node_modules/enzyme/src/ShallowWrapper.js:1652:13)
      at ShallowWrapper.text (node_modules/enzyme/src/ShallowWrapper.js:1093:17)
      at Object.<anonymous> (src/App.test.js:12:39)



Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        3.071 s, estimated 4 s
```

#### Implementasi

```jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="greetings">Selamat Datang</h1>
    </div>
  );
}

export default App;
```

```console
 PASS  src/App.test.js

  Task 1: Page has a greetings element with 'Selamat datang' message

    ✓ render properly (4 ms)

    ✓ there is a greetings element with 'Selamat Datang' message (3 ms)




Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.26 s
```

### TDD untuk Task 2

#### Skeleton

Kali ini kita sebaiknya membuat component baru di file terpisah.

```jsx
// src/components/Counter.js
function Counter() {
    return (
        <button></button>
    )
}

export default Counter;
```

#### Test

```jsx
import { shallow } from 'enzyme';
import Counter from './Counter';

describe("Task 2a: There is a Counter button component", () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  })

  it("render properly", () => {
    expect(wrapper).toBeTruthy();
  })

  it("has a button", () => {
    expect(wrapper.find('button').exists()).toBe(true);
  })

  it('change text when clicked', () => {
    wrapper.find('button').first().simulate("click");
    expect(wrapper.find('button').first().text()).toBe("1");
  })
})
```

```console
 FAIL  src/components/Counter.test.js
  Task 2a: There is a Counter button component
    ✓ render properly (5 ms)
    ✓ has a button (5 ms)
    ✕ change text when clicked (4 ms)

  ● Task 2a: There is a Counter button component › change text when clicked

    expect(received).toBe(expected) // Object.is equality

    Expected: "1"
    Received: ""

      20 |   it('change text when clicked', () => {
      21 |     wrapper.find('button').first().simulate("click");
    > 22 |     expect(wrapper.find('button').first().text()).toBe("1");
         |                                                   ^
      23 |   })
      24 | })

      at Object.<anonymous> (src/components/Counter.test.js:22:51)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        2.301 s
```

#### Implementasi

```jsx
import { useState } from "react";

function Counter() {
    const [text, setText] = useState(0)
    return (
        <button onClick={() => setText(text + 1)} >{text}</button>
    )
}

export default Counter;
```

```console
 PASS  src/components/Counter.test.js
  Task 2a: There is a Counter button component
    ✓ render properly (5 ms)
    ✓ has a button (3 ms)
    ✓ change text when clicked (2 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.48 s
```

### Memasukkan ke Parent Component

#### Test

```jsx
// src/App.test.js
// ada test sebelumnya

describe("Task 2: Page has two Counter components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('has two counter', () => {
    expect(wrapper.find('#counter1').exists()).toBe(true);
    expect(wrapper.find('#counter2').exists()).toBe(true);
  })
})
```

```console
 FAIL  src/App.test.js
  Task 1: Page has a greetings element with 'Selamat datang' message
    ✓ render properly (6 ms)
    ✓ there is a greetings element with 'Selamat Datang' message (5 ms)
  Task 2: Page has two Counter components
    ✕ has two counter (4 ms)

  ● Task 2: Page has two Counter components › has two counter

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      27 |
      28 |   it('has two counter', () => {
    > 29 |     expect(wrapper.find('#counter1').exists()).toBe(true);
         |                                                ^
      30 |     expect(wrapper.find('#counter2').exists()).toBe(true);
      31 |   })
      32 | })

      at Object.<anonymous> (src/App.test.js:29:48)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        1.776 s, estimated 19 s
```

#### Implementasi

```jsx
import './App.css';
import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
      <h1 id="greetings">Selamat Datang</h1>
      <Counter id="counter1" />
      <Counter id="counter2" />
    </div>
  );
}

export default App;
```

```console
 PASS  src/App.test.js
  Task 1: Page has a greetings element with 'Selamat datang' message
    ✓ render properly (6 ms)
    ✓ there is a greetings element with 'Selamat Datang' message (6 ms)
  Task 2: Page has two Counter components
    ✓ has two counter (3 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.107 s
```

### TDD untuk task 3 dan 4

(untuk task 3 dan 4 menyusul yaaa~)


Akses gitlab untuk demo blog ini : https://gitlab.com/jahns_michael/tdd-react-demo/
