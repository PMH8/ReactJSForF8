     -State là gì:là trạng thái của dữ liệu. từ 1->2, 2->3, 3->4,....
    -useState giúp thay đổi trang thái và hiển thị ra dữ liệu cho người dùng
    -useState là Hàm
        +Đầu vào là:một biến và một hàm
        +Cách xử lý
        +Đầu ra:biến được Hàm set
    -Đối số trong hàm set không được(count++) mà phải viết là count+1

### Cách hoạt động của useState
   -Sau khi gọi hàm set thì cả function App sẻ được gọi lại từ đầu. nhuưng từ lần thứ 2 trở đi thì nó sẽ không gọi lại hàm khởi tạo useState(1)
   -Component sẽ được render lại sau khi setState
   -Initial state chỉ dùng cho lần đầu
   -setState với call back :
   ``` 
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    
    Lúc này cả 3 counter đều có giá trị giống nhau



    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);

    khi này counter sẽ đc lưu vào sau đó chạy tiếp tới hàm dười.

    -InitalState với callback
         const cost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const total = cost.reduce((total, cur) => (total + cur), 0)
    console.log(total)
    const [counter, setCounter] = useState(total). nếu làm thế này thì khi re-render lại sẽ xử lí lại logic và sẽ gây hao tốn tài nguyên

    do đó ta truyền một call back(hay một hàm vào trong đối số của intal state)

    -SetState là thay state bằng giá trị mới:
    
 


    