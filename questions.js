const questions = [
  {
    question: "Quy luật căn bản của sản xuất và lưu thông hàng hoá là quy luật nào?",
    options: [
      "Quy luật cạnh tranh.",
      "Quy luật cung - cầu.",
      "Quy luật lưu thông tiền tệ.",
      "Quy luật giá trị."
    ],
    answer: "Quy luật giá trị."
  },
  {
    question: "Theo Tư tưởng Hồ Chí Minh, nguyên tắc phân phối chủ yếu trong chủ nghĩa xã hội là gì?",
    options: [
      "Làm theo năng lực, hưởng theo nhu cầu.",
      "Làm theo năng lực, hưởng theo lao động.",
      "Phân phối cho tất cả mọi người.",
      "Làm ít hưởng vừa đủ."
    ],
    answer: "Làm theo năng lực, hưởng theo lao động."
  },
  {
    question: "Hồ Chí Minh đã dùng hình tượng nào dưới đây để mô tả mối quan hệ giữa cách mạng giải phóng các dân tộc các nước thuộc địa và cách mạng vô sản ở chính quốc?",
    options: [
      "Con bạch tuộc.",
      "Hai cánh của con chim.",
      "Hai con chim đại bàng.",
      "Con đỉa hai vòi."
    ],
    answer: "Hai cánh của con chim."
  },
  {
    question: "Tháng 6/1925, Nguyễn Ái Quốc đã thành lập",
    options: [
      "Hội liên hiệp thuộc địa",
      "Hội Việt Nam cách mạng thanh niên",
      "Đông Dương Cộng sản đảng",
      "An Nam Cộng sản đảng"
    ],
    answer: "Hội Việt Nam cách mạng thanh niên"
  },
  {
    question: "Đảng Cộng sản Việt Nam ra đời là bước ngoặt vĩ đại của cách mạng Việt Nam vì đã chấm dứt",
    options: [
      "Vai trò lãnh đạo của giai cấp tư sản",
      "Thời kì khủng hoảng về đường lối và giai cấp lãnh đạo",
      "Vai trò lãnh đạo của giai cấp phong kiến Việt Nam",
      "Hoạt động của Hội Việt Nam cách mạng Thanh niên"
    ],
    answer: "Thời kì khủng hoảng về đường lối và giai cấp lãnh đạo"
  },
  {
    question: "“Dù màu da có khác nhau, trên đời này chỉ có hai giống người: Giống người bóc lột và giống người bị bóc lột”. Đây là nhận định của ai?",
    options: [
      "Phan Bội Châu",
      "Phan Châu Trinh",
      "Nguyễn Tất Thành",
      "Trần Phú"
    ],
    answer: "Nguyễn Tất Thành"
  },
  {
    question: "Điền vào chỗ trống: Quyền dân tộc tự quyết là quyền… đối với vận mệnh của dân tộc mình.",
    options: [
      "Tự do",
      "Làm chủ.",
      "Tự liệu.",
      "Tự lực"
    ],
    answer: "Làm chủ."
  },
  {
    question: "Sự thất bại của phong trào yêu nước nào đã chứng tỏ độc lập dân tộc không gắn liền với chế độ phong kiến?",
    options: [
      "Phong trào Cần Vương",
      "Phong trào nông dân Yên Thế",
      "Cuộc đấu tranh của đồng bào dân tộc thiểu số",
      "Khởi nghĩa Thái Nguyên"
    ],
    answer: "Phong trào Cần Vương"
  },
  {
    question: "Điền vào chỗ trống đúng theo tư tưởng Hồ Chí Minh:\n\"Làm cách mệnh rồi thì quyền trao cho... chớ để trong tay một bọn ít người\"",
    options: [
      "dân chúng số nhiều.",
      "giai cấp công nhân.",
      "giai cấp nông dân.",
      "giai cấp tư sản dân tộc."
    ],
    answer: "dân chúng số nhiều."
  },
  {
    question: "Chọn cụm từ thích hợp điền vào chỗ trống:\n\"Chủ tịch Hồ Chí Minh nói: \"Một dân tộc... là một dân tộc…\"",
    options: [
      "dốt/hèn",
      "dốt/yếu",
      "yếu/dốt",
      "yếu/hèn"
    ],
    answer: "dốt/yếu"
  },
  {
    question: "Theo Hồ Chí Minh, muốn xây dựng chủ nghĩa xã hội trước hết cần có cái gì?",
    options: [
      "Khoa học – kỹ thuật.",
      "Kinh tế phát triển.",
      "Con người toàn diện.",
      "Con người xã hội chủ nghĩa."
    ],
    answer: "Con người xã hội chủ nghĩa."
  },
  {
    question: "Điền thêm từ để hoàn thiện nhận định sau đây và xác định đó là nhận định của ai?\n\"Điểm khác biệt căn bản giữa xã hội loài người với xã hội loài vật là ở chỗ: loài vật may mắn lắm chỉ hái lượm trong khi con người lại…\"",
    options: [
      "Biết sáng tạo/Ph.Ăngghen.",
      "Sản xuất/Ph.Ăngghen.",
      "Tiến hành lao động/C.Mác.",
      "Tư duy/V.I.Lênin."
    ],
    answer: "Sản xuất/Ph.Ăngghen."
  },
  {
    question: "Theo Hồ Chí Minh, để phát huy sức mạnh cá nhân người lao động, cần phải:",
    options: [
      "Tác động vào nhu cầu và lợi ích thiết thân của con người.",
      "Tác động vào động lực chính trị - tinh thần của con người.",
      "Tác động vào sở thích cá nhân của con người.",
      "Tác động vào nguyện vọng và mong muốn của con người."
    ],
    answer: "Tác động vào nhu cầu và lợi ích thiết thân của con người."
  },
  {
    question: "Nhận định sau đây đúng hay sai: Nguyễn Ái Quốc đã gửi bản \"Yêu sách của nhân dân An Nam\" tới Hội nghị Versailles vào ngày 18 tháng 06 năm 1918.",
    options: [
      "Đúng",
      "Sai"
    ],
    answer: "Sai"
  },
  {
    question: "Trong giai đoạn 1954-1975, kẻ thù chính của dân tộc Việt Nam là?",
    options: [
      "Thực dân Pháp",
      "Đế quốc Mỹ",
      "Trung Quốc",
      "Nhật Bản"
    ],
    answer: "Đế quốc Mỹ"
  },
  {
    question: "Ngày 18/06/1919, Nguyễn Ái Quốc đã thay mặt những người Việt Nam yêu nước tại Pháp gửi bản yêu sách tới hội nghị nào?",
    options: [
      "Hội nghị Vécxây",
      "Hội nghị Pari",
      "Hội nghị Yalta",
      "Hội nghị Tehran"
    ],
    answer: "Hội nghị Vécxây"
  },
  {
    question: "Nhận định sau đây đúng hay sai:\n\"Đưa hổ cửa trước, rước beo cửa sau\" là câu Nguyễn Ái Quốc nói về chủ trương cứu nước của Phan Chu Trinh.",
    options: [
      "Đúng",
      "Sai"
    ],
    answer: "Sai"
  },
  {
    question: "Nhận định sau đây đúng hay sai:\nHạt thóc khi gieo xuống đất có thể nảy mầm thành cây lúa. Vậy hạt thóc vừa là khả năng vừa là hiện thực.",
    options: [
      "Đúng",
      "Sai"
    ],
    answer: "Đúng"
  },
  {
    question: "Điền vào chỗ trống để hoàn thiện câu sau:\nTheo Hồ Chí Minh: \"… mở ra con đường giải phóng cho các dân tộc và cả loài người, mở đầu một thời đại mới trong lịch sử.\"",
    options: [
      "Cách mạng tư sản Pháp.",
      "Cách mạng Tân Hợi.",
      "Cách mạng Tháng Mười.",
      "Cách mạng Tháng Tám."
    ],
    answer: "Cách mạng Tháng Mười."
  },
  {
    question: "Điền vào chỗ trống: Con người xã hội chủ nghĩa là con người có tinh thần và năng lực xây dựng thành công chủ nghĩa xã hội; là con người lao động mới; là con người có tinh thần…; là con người có lối sống tình nghĩa, có tính cộng đồng cao.",
    options: [
      "Yêu nước chân chính và tinh thần quốc tế trong sáng.",
      "Yêu nước và tinh thần quốc tế vô sản.",
      "Yêu nước nồng nàn và tinh thần quốc tế vô tư.",
      "Tinh thần quốc tế xã hội chủ nghĩa."
    ],
    answer: "Yêu nước chân chính và tinh thần quốc tế trong sáng."
  },
  {
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Tam dân của Tôn Trung Sơn đối với nước ta là:",
    options: [
      "Chống phong kiến.",
      "Đấu tranh vì tự do, dân chủ.",
      "Phù hợp với điều kiện thực tế nước ta.",
      "Đem lại độc lập, tự do."
    ],
    answer: "Phù hợp với điều kiện thực tế nước ta."
  },
  {
    question: "Nhận định sau đây đúng hay sai: Chủ nghĩa tư bản tự do cạnh tranh và chủ nghĩa tư bản độc quyền khác nhau về bản chất.",
    options: [
      "Đúng",
      "Sai"
    ],
    answer: "Sai"
  },
  {
    question: "Theo Hồ Chí Minh, “căn bệnh” nào là “căn bệnh mẹ đẻ ra hàng trăm thứ căn bệnh con nguy hiểm khác”?",
    options: [
      "Chủ nghĩa cá nhân.",
      "Tham ô.",
      "Lãng phí.",
      "Quan liêu."
    ],
    answer: "Chủ nghĩa cá nhân."
  },
  {
    question: "Điều kiện nào quyết định nhất cho sự xuất hiện của hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
    options: [
      "Sự phát triển mạnh của lực lượng sản xuất dưới chủ nghĩa tư bản.",
      "Mâu thuẫn giai cấp trở nên gay gắt.",
      "Xây dựng được Đảng Cộng sản.",
      "Giai cấp công nhân giành được chính quyền."
    ],
    answer: "Sự phát triển mạnh của lực lượng sản xuất dưới chủ nghĩa tư bản."
  }
];

