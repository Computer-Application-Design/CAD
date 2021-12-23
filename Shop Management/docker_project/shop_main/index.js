/*2017152010 made by 김태용*/
const express = require('express');
const path = require('path');
const morgan = require('morgan'); // 추가적인 로그를 확인하기 위해서
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const connect = require('./schemas'); // schemas폴더 안에 있는 index.js
const dotenv = require('dotenv'); // 환경 설정
const pageRouter = require('./routes/page'); // 쇼핑몰 페이지 라우터
const productRouter = require('./routes/product'); // 상품 등록 라우터
const userRouter = require('./routes/users');
const productAddRouter = require('./routes/productAdd');

dotenv.config()
const app = express();
app.set('port', process.env.PORT || 4001); // 포트 설정 process.env.PORT객체에 포트 속성이 있다면 그 값 이용 없다면 3000으로 설정
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});
connect();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일들을 제공하는 라우터 -> css 같은 파일들 경로 public폴더로 지정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({ // 세션 미들웨어
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

app.use('/', pageRouter); // GET / 라우터
app.use('/products',productRouter); // GET /products 라우터
app.use('/users',userRouter);
app.use('/productAdd',productAddRouter); // 관리자만 들어갈 수 있는 경로

//미들 웨어 사용, 미들웨어는 app.use, app.get으로 미들웨어 사용 app.
app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error); // 에러 밝생 시 에러처리 미들웨어로 이동
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error'); 
});

app.listen(app.get('port'), () => { // 4001번 포트
  console.log(app.get('port'), '번 포트에서 대기 중');
});
