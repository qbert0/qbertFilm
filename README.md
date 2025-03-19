
# Nền tảng review phim trực tuyến 

## GIỚI THIỆU 

Hệ thống hướng đến đối tượng những người yêu thích xem phim, cho phép người dùng có thể tìm hiểu trước về bộ phim muốn xem giúp đưa ra quyết định dành thời gian xem phim hay không. 

Hệ thống tích hợp các mô hình machine learning nhằm tăng trải nghiệm của người dùng cuối: 
- Recommendation System (KNN) 
- Sentiment Analysis System (Naive Bayes) 
- Preference System (Decision Tree) 

## HƯỚNG DẪN CÀI ĐẶT 

Hệ thống được dựa trên kiến trúc Microservice.

`git clone https://github.com/qbert0/qbertFilm/tree/mainc`

`cd qbertFilm` 

`docker-compose up`

Sau khi pull và khởi động các container của từng service thành công, truy cập: [http://localhost:3000/](http://localhost:3000/)

## Review
Xem sản phẩm được deploy tại:  [http://localhost:3000/](https://qbert-film.vercel.app/)
