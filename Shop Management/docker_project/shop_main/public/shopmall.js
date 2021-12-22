// 사용자 등록 시
// document.getElementById('user-form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     console.log("버튼눌림")
//     const name = e.target.username.value;
//     const age = e.target.age.value;
//     const married = e.target.married.checked;
//     if (!name) {
//       return alert('이름을 입력하세요');
//     }
//     if (!age) {
//       return alert('나이를 입력하세요');
//     }
//     try {
//       await axios.post('/users', { name, age, married });
//       getUser();
//     } catch (err) {
//       console.error(err);
//     }
//     e.target.username.value = '';
//     e.target.age.value = '';
//     e.target.married.checked = false;
//   });


// 상품 등록
document.getElementById('market-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("버튼 눌림");
    const name = e.target.productname.value;
    const price = e.target.price.value;
    const inventory = e.target.inventory.value;
    const source = e.target.source.value;
    if (!name) {
      return alert('상품 이름을 입력하세요');
    }
    if (!price) {
      return alert('가격을 입력하세요');
    }

    if (!inventory) {
        return alert('수량을 입력하세요')
    }
    try {
      await axios.post('/productAdd', { name, price, inventory, source});
      //getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.name.value = '';
    e.target.price.value = '';
    e.target.inventory.value = '';
  });
