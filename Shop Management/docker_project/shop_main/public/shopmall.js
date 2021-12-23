


// 상품 등록  made by 2017152010 김태용
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
