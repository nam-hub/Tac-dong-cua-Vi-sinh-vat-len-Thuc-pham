        // Dữ liệu mô phỏng
        const foodData = {
            cheese: {
                name: "Phô mai",
                class: "cheese",
                info: {
                    normal: {
                        0: {
                            title: "Phô mai - Hiện tại (Thường, 25°C)",
                            description: "Phô mai tươi ngon, có thể sử dụng ngay. Vi khuẩn có lợi trong quá trình lên men tạo ra hương vị đặc trưng.",
                            microbeInfo: "Lactobacillus, Streptococcus - Vi khuẩn lên men có lợi",
                            benefits: [
                                "Chứa probiotic tốt cho hệ tiêu hóa",
                                "Giàu protein và canxi",
                                "Hỗ trợ phát triển xương và răng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Phô mai - Sau 3 ngày (Thường, 25°C)",
                            description: "Phô mai vẫn ăn được, nhưng bắt đầu có dấu hiệu mốc nhẹ ở bề mặt nếu không bọc kín.",
                            microbeInfo: "Lactobacillus, Penicillium - Vi khuẩn và nấm mốc nhẹ",
                            benefits: [
                                "Vẫn giữ probiotic",
                                "Hương vị đậm đà hơn"
                            ],
                            harms: [
                                "Nguy cơ mốc nếu không bảo quản tốt"
                            ],
                            spoilage: 20
                        },
                        5: {
                            title: "Phô mai - Sau 5 ngày (Thường, 25°C)",
                            description: "Phô mai xuất hiện mốc nhỏ do nhiệt độ phòng. Một số nấm mốc có lợi, nhưng cũng có loại gây hại.",
                            microbeInfo: "Penicillium roqueforti (có lợi), Aspergillus flavus (có hại)",
                            benefits: [
                                "Một số nấm mốc tạo hương vị đặc biệt",
                                "Quá trình lên men làm mềm phô mai"
                            ],
                            harms: [
                                "Nguy cơ mốc độc hại",
                                "Có thể gây ngộ độc nếu ăn phải"
                            ],
                            spoilage: 40
                        },
                        7: {
                            title: "Phô mai - Sau 7 ngày (Thường, 25°C)",
                            description: "Phô mai có mốc rõ hơn, mùi hơi chua. Cần kiểm tra kỹ trước khi ăn.",
                            microbeInfo: "Penicillium, Aspergillus - Nấm mốc",
                            benefits: [
                                "Vẫn có thể dùng nếu cắt bỏ mốc"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Mùi vị không còn ngon"
                            ],
                            spoilage: 60
                        },
                        10: {
                            title: "Phô mai - Sau 10 ngày (Thường, 25°C)",
                            description: "Phô mai hỏng nặng, mốc xanh và trắng phủ kín. Không an toàn để sử dụng.",
                            microbeInfo: "Aspergillus flavus, Penicillium citrinum - Nấm mốc độc hại",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Chứa nấm mốc gây bệnh",
                                "Nguy cơ ngộ độc do aflatoxin"
                            ],
                            spoilage: 90
                        },
                        15: {
                            title: "Phô mai - Sau 15 ngày (Thường, 25°C)",
                            description: "Phô mai hoàn toàn hỏng, mốc dày đặc, mùi hôi mạnh. Không thể sử dụng.",
                            microbeInfo: "Aspergillus flavus, Fusarium - Nấm mốc độc hại",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Sản sinh độc tố aflatoxin"
                            ],
                            spoilage: 95
                        },
                        20: {
                            title: "Phô mai - Sau 20 ngày (Thường, 25°C)",
                            description: "Phô mai bị phân hủy hoàn toàn, đầy nấm mốc và vi khuẩn. Tuyệt đối không sử dụng.",
                            microbeInfo: "Aspergillus, Fusarium, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây ung thư"
                            ],
                            spoilage: 100
                        }
                    },
                    fridge: {
                        0: {
                            title: "Phô mai - Hiện tại (Tủ lạnh, 4°C)",
                            description: "Phô mai tươi, giữ được độ tươi ngon lâu hơn trong tủ lạnh.",
                            microbeInfo: "Lactobacillus, Streptococcus - Vi khuẩn lên men có lợi",
                            benefits: [
                                "Duy trì chất lượng lâu hơn",
                                "Probiotic hỗ trợ tiêu hóa"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Phô mai - Sau 3 ngày (Tủ lạnh, 4°C)",
                            description: "Phô mai vẫn tươi, không có dấu hiệu hư hỏng nhờ nhiệt độ thấp.",
                            microbeInfo: "Lactobacillus - Vi khuẩn lên men",
                            benefits: [
                                "Giữ nguyên chất dinh dưỡng",
                                "An toàn để sử dụng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 5
                        },
                        5: {
                            title: "Phô mai - Sau 5 ngày (Tủ lạnh, 4°C)",
                            description: "Phô mai vẫn tốt, ít thay đổi. Một số vi khuẩn có lợi vẫn hoạt động.",
                            microbeInfo: "Lactobacillus - Vi khuẩn lên men",
                            benefits: [
                                "Giữ được hương vị và dinh dưỡng",
                                "An toàn để sử dụng"
                            ],
                            harms: [
                                "Có thể hơi khô nếu không bọc kín"
                            ],
                            spoilage: 10
                        },
                        7: {
                            title: "Phô mai - Sau 7 ngày (Tủ lạnh, 4°C)",
                            description: "Phô mai vẫn ăn được, nhưng có thể có mốc nhẹ nếu không bọc kín.",
                            microbeInfo: "Lactobacillus, Penicillium - Nấm mốc nhẹ",
                            benefits: [
                                "Vẫn giữ chất dinh dưỡng",
                                "An toàn nếu cắt bỏ mốc"
                            ],
                            harms: [
                                "Nguy cơ mốc nhẹ"
                            ],
                            spoilage: 15
                        },
                        10: {
                            title: "Phô mai - Sau 10 ngày (Tủ lạnh, 4°C)",
                            description: "Phô mai có mốc nhỏ nếu không bọc kín. Vẫn có thể ăn được nếu cắt bỏ phần mốc.",
                            microbeInfo: "Penicillium - Nấm mốc nhẹ",
                            benefits: [
                                "Vẫn giữ được một số chất dinh dưỡng"
                            ],
                            harms: [
                                "Nguy cơ mốc nếu bảo quản không đúng",
                                "Mất hương vị ban đầu"
                            ],
                            spoilage: 30
                        },
                        15: {
                            title: "Phô mai - Sau 15 ngày (Tủ lạnh, 4°C)",
                            description: "Phô mai bắt đầu khô và có mốc rõ hơn. Cần cắt bỏ phần hỏng trước khi ăn.",
                            microbeInfo: "Penicillium, Aspergillus - Nấm mốc",
                            benefits: [
                                "Có thể dùng nếu cắt bỏ mốc"
                            ],
                            harms: [
                                "Nguy cơ mốc độc hại",
                                "Mất chất lượng"
                            ],
                            spoilage: 50
                        },
                        20: {
                            title: "Phô mai - Sau 20 ngày (Tủ lạnh, 4°C)",
                            description: "Phô mai hỏng, mốc nhiều, không nên sử dụng dù bảo quản lạnh.",
                            microbeInfo: "Aspergillus, Penicillium citrinum",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Mùi vị khó chịu"
                            ],
                            spoilage: 80
                        }
                    },
                    hot: {
                        0: {
                            title: "Phô mai - Hiện tại (Nóng ẩm, 35°C)",
                            description: "Phô mai tươi nhưng dễ hỏng nhanh do nhiệt độ cao và độ ẩm.",
                            microbeInfo: "Lactobacillus, Streptococcus - Vi khuẩn lên men",
                            benefits: [
                                "Chứa probiotic tốt cho tiêu hóa"
                            ],
                            harms: [
                                "Dễ bị nhiễm khuẩn nếu không bảo quản tốt"
                            ],
                            spoilage: 5
                        },
                        3: {
                            title: "Phô mai - Sau 3 ngày (Nóng ẩm, 35°C)",
                            description: "Phô mai bắt đầu có mốc và mùi chua do môi trường nóng ẩm.",
                            microbeInfo: "Penicillium, Aspergillus - Nấm mốc",
                            benefits: [
                                "Vẫn có thể dùng nếu cắt bỏ mốc"
                            ],
                            harms: [
                                "Nguy cơ mốc độc hại",
                                "Mùi vị thay đổi"
                            ],
                            spoilage: 50
                        },
                        5: {
                            title: "Phô mai - Sau 5 ngày (Nóng ẩm, 35°C)",
                            description: "Phô mai hỏng nhanh, mốc và vi khuẩn phát triển mạnh do điều kiện nóng ẩm.",
                            microbeInfo: "Aspergillus, Penicillium citrinum - Nấm mốc độc hại",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Chứa nấm mốc và vi khuẩn gây bệnh",
                                "Nguy cơ ngộ độc thực phẩm"
                            ],
                            spoilage: 80
                        },
                        7: {
                            title: "Phô mai - Sau 7 ngày (Nóng ẩm, 35°C)",
                            description: "Phô mai hỏng nặng, mốc dày đặc, mùi hôi. Không an toàn.",
                            microbeInfo: "Aspergillus flavus, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Sản sinh độc tố aflatoxin"
                            ],
                            spoilage: 90
                        },
                        10: {
                            title: "Phô mai - Sau 10 ngày (Nóng ẩm, 35°C)",
                            description: "Phô mai hoàn toàn hỏng, đầy mốc và có mùi thối. Không thể sử dụng.",
                            microbeInfo: "Aspergillus flavus, Fusarium - Nấm mốc độc hại",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố aflatoxin"
                            ],
                            spoilage: 95
                        },
                        15: {
                            title: "Phô mai - Sau 15 ngày (Nóng ẩm, 35°C)",
                            description: "Phô mai phân hủy, mốc và vi khuẩn phát triển mạnh. Không sử dụng được.",
                            microbeInfo: "Aspergillus, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây bệnh"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Phô mai - Sau 20 ngày (Nóng ẩm, 35°C)",
                            description: "Phô mai bị phân hủy hoàn toàn, không còn hình dạng ban đầu.",
                            microbeInfo: "Fusarium, Clostridium, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    }
                }
            },
            apple: {
                name: "Táo",
                class: "apple",
                info: {
                    normal: {
                        0: {
                            title: "Táo - Hiện tại (Thường, 25°C)",
                            description: "Táo tươi, giàu vitamin và chất xơ. Vi sinh vật trên bề mặt vô hại.",
                            microbeInfo: "Lactobacillus, Saccharomyces - Vi khuẩn và nấm men",
                            benefits: [
                                "Giàu chất chống oxy hóa",
                                "Tốt cho hệ tiêu hóa"
                            ],
                            harms: [
                                "Có thể chứa vi khuẩn nếu không rửa kỹ"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Táo - Sau 3 ngày (Thường, 25°C)",
                            description: "Táo vẫn tươi nhưng bắt đầu mềm nhẹ, có thể có vết thâm nhỏ.",
                            microbeInfo: "Lactobacillus, Saccharomyces",
                            benefits: [
                                "Vẫn giàu vitamin",
                                "An toàn để ăn"
                            ],
                            harms: [
                                "Mất một chút độ giòn"
                            ],
                            spoilage: 15
                        },
                        5: {
                            title: "Táo - Sau 5 ngày (Thường, 25°C)",
                            description: "Táo mềm, có vết thâm. Nấm men và vi khuẩn phân hủy đường.",
                            microbeInfo: "Saccharomyces cerevisiae, Penicillium expansum",
                            benefits: [
                                "Một số enzyme có lợi được giải phóng"
                            ],
                            harms: [
                                "Mất chất dinh dưỡng",
                                "Nguy cơ dị ứng do nấm mốc"
                            ],
                            spoilage: 50
                        },
                        7: {
                            title: "Táo - Sau 7 ngày (Thường, 25°C)",
                            description: "Táo có nhiều vết thâm, bắt đầu thối nhẹ. Nấm mốc phát triển.",
                            microbeInfo: "Penicillium expansum, Aspergillus",
                            benefits: [
                                "Có thể dùng làm nước ép nếu cắt bỏ phần hỏng"
                            ],
                            harms: [
                                "Nguy cơ mốc độc hại",
                                "Mất nhiều chất dinh dưỡng"
                            ],
                            spoilage: 70
                        },
                        10: {
                            title: "Táo - Sau 10 ngày (Thường, 25°C)",
                            description: "Táo thối rữa, nấm mốc phát triển mạnh. Không an toàn để ăn.",
                            microbeInfo: "Penicillium expansum, Aspergillus niger",
                            benefits: [
                                "Có thể dùng làm phân compost"
                            ],
                            harms: [
                                "Chứa nấm mốc gây bệnh",
                                "Sản sinh độc tố patulin"
                            ],
                            spoilage: 95
                        },
                        15: {
                            title: "Táo - Sau 15 ngày (Thường, 25°C)",
                            description: "Táo hỏng hoàn toàn, đầy nấm mốc, mùi thối. Không sử dụng được.",
                            microbeInfo: "Aspergillus niger, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố patulin"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Táo - Sau 20 ngày (Thường, 25°C)",
                            description: "Táo phân hủy, không còn hình dạng ban đầu, đầy nấm mốc.",
                            microbeInfo: "Fusarium, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        }
                    },
                    fridge: {
                        0: {
                            title: "Táo - Hiện tại (Tủ lạnh, 4°C)",
                            description: "Táo tươi, giữ được độ giòn và chất dinh dưỡng trong tủ lạnh.",
                            microbeInfo: "Lactobacillus - Vi khuẩn tự nhiên",
                            benefits: [
                                "Duy trì độ tươi lâu",
                                "Giàu vitamin và chất xơ"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Táo - Sau 3 ngày (Tủ lạnh, 4°C)",
                            description: "Táo vẫn tươi, không có thay đổi đáng kể.",
                            microbeInfo: "Lactobacillus",
                            benefits: [
                                "Giữ nguyên độ giòn",
                                "An toàn để ăn"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 2
                        },
                        5: {
                            title: "Táo - Sau 5 ngày (Tủ lạnh, 4°C)",
                            description: "Táo vẫn tươi, ít thay đổi nhờ nhiệt độ thấp.",
                            microbeInfo: "Lactobacillus - Vi khuẩn tự nhiên",
                            benefits: [
                                "Giữ nguyên chất dinh dưỡng",
                                "An toàn để ăn"
                            ],
                            harms: [
                                "Hơi mất độ giòn"
                            ],
                            spoilage: 5
                        },
                        7: {
                            title: "Táo - Sau 7 ngày (Tủ lạnh, 4°C)",
                            description: "Táo vẫn tốt, có thể có vết thâm rất nhỏ.",
                            microbeInfo: "Saccharomyces - Nấm men nhẹ",
                            benefits: [
                                "Vẫn giàu vitamin",
                                "An toàn để ăn"
                            ],
                            harms: [
                                "Mất một chút độ giòn"
                            ],
                            spoilage: 10
                        },
                        10: {
                            title: "Táo - Sau 10 ngày (Tủ lạnh, 4°C)",
                            description: "Táo bắt đầu mềm, có thể có vết thâm nhỏ. Vẫn ăn được.",
                            microbeInfo: "Saccharomyces - Nấm men nhẹ",
                            benefits: [
                                "Vẫn giữ được vitamin",
                                "An toàn nếu không có vết thâm lớn"
                            ],
                            harms: [
                                "Mất một phần chất dinh dưỡng"
                            ],
                            spoilage: 20
                        },
                        15: {
                            title: "Táo - Sau 15 ngày (Tủ lạnh, 4°C)",
                            description: "Táo mềm hơn, có vết thâm rõ hơn. Vẫn có thể ăn nếu cắt bỏ phần hỏng.",
                            microbeInfo: "Penicillium - Nấm mốc nhẹ",
                            benefits: [
                                "Vẫn có thể dùng nếu cắt bỏ phần hỏng"
                            ],
                            harms: [
                                "Mất chất dinh dưỡng",
                                "Nguy cơ mốc nhẹ"
                            ],
                            spoilage: 40
                        },
                        20: {
                            title: "Táo - Sau 20 ngày (Tủ lạnh, 4°C)",
                            description: "Táo có nhiều vết thâm và mốc nhỏ, không nên ăn trừ khi cắt bỏ phần hỏng.",
                            microbeInfo: "Penicillium expansum",
                            benefits: [
                                "Có thể dùng phần còn tốt"
                            ],
                            harms: [
                                "Nguy cơ mốc độc hại",
                                "Mất hầu hết chất dinh dưỡng"
                            ],
                            spoilage: 70
                        }
                    },
                    hot: {
                        0: {
                            title: "Táo - Hiện tại (Nóng ẩm, 35°C)",
                            description: "Táo tươi nhưng dễ hỏng nhanh do nhiệt độ cao và độ ẩm.",
                            microbeInfo: "Lactobacillus, Saccharomyces",
                            benefits: [
                                "Giàu chất chống oxy hóa"
                            ],
                            harms: [
                                "Dễ bị nhiễm khuẩn bề mặt"
                            ],
                            spoilage: 5
                        },
                        3: {
                            title: "Táo - Sau 3 ngày (Nóng ẩm, 35°C)",
                            description: "Táo bắt đầu mềm, có vết thâm do môi trường nóng ẩm.",
                            microbeInfo: "Saccharomyces, Penicillium",
                            benefits: [
                                "Vẫn có thể ăn nếu cắt bỏ phần hỏng"
                            ],
                            harms: [
                                "Nguy cơ mốc nhẹ",
                                "Mất độ giòn"
                            ],
                            spoilage: 40
                        },
                        5: {
                            title: "Táo - Sau 5 ngày (Nóng ẩm, 35°C)",
                            description: "Táo thối nhanh, có vết thâm và nấm mốc do môi trường nóng ẩm.",
                            microbeInfo: "Penicillium expansum, Aspergillus",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc do nấm mốc",
                                "Sản sinh độc tố patulin"
                            ],
                            spoilage: 85
                        },
                        7: {
                            title: "Táo - Sau 7 ngày (Nóng ẩm, 35°C)",
                            description: "Táo hỏng nặng, mốc và thối rữa. Không an toàn để ăn.",
                            microbeInfo: "Aspergillus niger, Fusarium",
                            benefits: [
                                "Có thể dùng làm phân compost"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố patulin"
                            ],
                            spoilage: 95
                        },
                        10: {
                            title: "Táo - Sau 10 ngày (Nóng ẩm, 35°C)",
                            description: "Táo hoàn toàn thối rữa, đầy nấm mốc. Không thể ăn.",
                            microbeInfo: "Aspergillus niger, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây bệnh"
                            ],
                            spoilage: 100
                        },
                        15: {
                            title: "Táo - Sau 15 ngày (Nóng ẩm, 35°C)",
                            description: "Táo phân hủy hoàn toàn, không còn hình dạng ban đầu.",
                            microbeInfo: "Fusarium, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Táo - Sau 20 ngày (Nóng ẩm, 35°C)",
                            description: "Táo bị phân hủy hoàn toàn, đầy nấm mốc và vi khuẩn.",
                            microbeInfo: "Fusarium, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    }
                }
            },
            bread: {
                name: "Bánh mì",
                class: "bread",
                info: {
                    normal: {
                        0: {
                            title: "Bánh mì - Hiện tại (Thường, 25°C)",
                            description: "Bánh mì tươi, mềm, thơm. Men đã hoàn thành quá trình lên men.",
                            microbeInfo: "Saccharomyces cerevisiae - Nấm men",
                            benefits: [
                                "Cung cấp vitamin B",
                                "Dễ tiêu hóa"
                            ],
                            harms: [
                                "Có thể chứa bào tử nấm mốc"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Bánh mì - Sau 3 ngày (Thường, 25°C)",
                            description: "Bánh mì bắt đầu khô, có thể có mốc rất nhỏ ở bề mặt.",
                            microbeInfo: "Saccharomyces, Rhizopus - Nấm mốc nhẹ",
                            benefits: [
                                "Vẫn ăn được",
                                "Có thể nướng lại"
                            ],
                            harms: [
                                "Nguy cơ mốc nhẹ"
                            ],
                            spoilage: 20
                        },
                        5: {
                            title: "Bánh mì - Sau 5 ngày (Thường, 25°C)",
                            description: "Bánh mì khô, cứng, có mốc nhỏ ở các vết nứt.",
                            microbeInfo: "Rhizopus stolonifer, Aspergillus",
                            benefits: [
                                "Có thể nướng lại để dùng"
                            ],
                            harms: [
                                "Nấm mốc sản sinh độc tố",
                                "Nguy cơ dị ứng bào tử"
                            ],
                            spoilage: 50
                        },
                        7: {
                            title: "Bánh mì - Sau 7 ngày (Thường, 25°C)",
                            description: "Bánh mì có mốc rõ hơn, mùi mốc nhẹ. Không nên ăn.",
                            microbeInfo: "Penicillium, Aspergillus",
                            benefits: [
                                "Có thể dùng làm thức ăn chăn nuôi nếu xử lý"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc do mốc",
                                "Mất chất lượng"
                            ],
                            spoilage: 75
                        },
                        10: {
                            title: "Bánh mì - Sau 10 ngày (Thường, 25°C)",
                            description: "Bánh mì mốc xanh, trắng, mùi hôi. Không an toàn.",
                            microbeInfo: "Penicillium, Aspergillus flavus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Chứa nấm mốc độc hại",
                                "Nguy cơ ngộ độc do aflatoxin"
                            ],
                            spoilage: 95
                        },
                        15: {
                            title: "Bánh mì - Sau 15 ngày (Thường, 25°C)",
                            description: "Bánh mì hỏng hoàn toàn, mốc dày đặc, không sử dụng được.",
                            microbeInfo: "Aspergillus flavus, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố aflatoxin"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Bánh mì - Sau 20 ngày (Thường, 25°C)",
                            description: "Bánh mì phân hủy, đầy nấm mốc và vi khuẩn.",
                            microbeInfo: "Fusarium, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây ung thư"
                            ],
                            spoilage: 100
                        }
                    },
                    fridge: {
                        0: {
                            title: "Bánh mì - Hiện tại (Tủ lạnh, 4°C)",
                            description: "Bánh mì tươi, giữ được độ mềm trong tủ lạnh.",
                            microbeInfo: "Saccharomyces cerevisiae",
                            benefits: [
                                "Giữ độ tươi lâu hơn",
                                "Cung cấp năng lượng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Bánh mì - Sau 3 ngày (Tủ lạnh, 4°C)",
                            description: "Bánh mì vẫn tươi, không có mốc nhờ nhiệt độ thấp.",
                            microbeInfo: "Saccharomyces",
                            benefits: [
                                "Giữ nguyên độ mềm",
                                "An toàn để ăn"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 5
                        },
                        5: {
                            title: "Bánh mì - Sau 5 ngày (Tủ lạnh, 4°C)",
                            description: "Bánh mì hơi khô, ít mốc nhờ nhiệt độ thấp.",
                            microbeInfo: "Saccharomyces - Nấm men nhẹ",
                            benefits: [
                                "Vẫn ăn được",
                                "Giữ được chất dinh dưỡng"
                            ],
                            harms: [
                                "Hơi mất độ mềm"
                            ],
                            spoilage: 15
                        },
                        7: {
                            title: "Bánh mì - Sau 7 ngày (Tủ lạnh, 4°C)",
                            description: "Bánh mì khô hơn, có thể có mốc rất nhỏ nếu không bọc kín.",
                            microbeInfo: "Penicillium - Nấm mốc nhẹ",
                            benefits: [
                                "Vẫn có thể nướng lại"
                            ],
                            harms: [
                                "Nguy cơ mốc nhẹ"
                            ],
                            spoilage: 25
                        },
                        10: {
                            title: "Bánh mì - Sau 10 ngày (Tủ lạnh, 4°C)",
                            description: "Bánh mì khô, có thể có mốc nhỏ nếu không bọc kín.",
                            microbeInfo: "Penicillium - Nấm mốc nhẹ",
                            benefits: [
                                "Vẫn có thể nướng lại để dùng"
                            ],
                            harms: [
                                "Nguy cơ mốc nếu không bọc kỹ"
                            ],
                            spoilage: 35
                        },
                        15: {
                            title: "Bánh mì - Sau 15 ngày (Tủ lạnh, 4°C)",
                            description: "Bánh mì có mốc rõ hơn, không nên ăn trừ khi nướng lại.",
                            microbeInfo: "Penicillium, Aspergillus",
                            benefits: [
                                "Có thể dùng nếu xử lý kỹ"
                            ],
                            harms: [
                                "Nguy cơ mốc độc hại",
                                "Mất chất lượng"
                            ],
                            spoilage: 60
                        },
                        20: {
                            title: "Bánh mì - Sau 20 ngày (Tủ lạnh, 4°C)",
                            description: "Bánh mì hỏng, mốc nhiều, không nên sử dụng.",
                            microbeInfo: "Aspergillus, Penicillium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Mùi vị khó chịu"
                            ],
                            spoilage: 85
                        }
                    },
                    hot: {
                        0: {
                            title: "Bánh mì - Hiện tại (Nóng ẩm, 35°C)",
                            description: "Bánh mì tươi nhưng dễ mốc do độ ẩm cao.",
                            microbeInfo: "Saccharomyces cerevisiae",
                            benefits: [
                                "Cung cấp năng lượng"
                            ],
                            harms: [
                                "Dễ bị mốc nhanh"
                            ],
                            spoilage: 5
                        },
                        3: {
                            title: "Bánh mì - Sau 3 ngày (Nóng ẩm, 35°C)",
                            description: "Bánh mì bắt đầu có mốc nhỏ, khô bề mặt.",
                            microbeInfo: "Rhizopus, Penicillium",
                            benefits: [
                                "Có thể nướng lại để dùng"
                            ],
                            harms: [
                                "Nguy cơ mốc độc hại",
                                "Mất độ mềm"
                            ],
                            spoilage: 50
                        },
                        5: {
                            title: "Bánh mì - Sau 5 ngày (Nóng ẩm, 35°C)",
                            description: "Bánh mì mốc xanh, trắng do môi trường nóng ẩm.",
                            microbeInfo: "Rhizopus stolonifer, Aspergillus",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc do nấm mốc",
                                "Chứa độc tố aflatoxin"
                            ],
                            spoilage: 90
                        },
                        7: {
                            title: "Bánh mì - Sau 7 ngày (Nóng ẩm, 35°C)",
                            description: "Bánh mì hỏng nặng, mốc dày đặc, mùi hôi.",
                            microbeInfo: "Aspergillus flavus, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố aflatoxin"
                            ],
                            spoilage: 95
                        },
                        10: {
                            title: "Bánh mì - Sau 10 ngày (Nóng ẩm, 35°C)",
                            description: "Bánh mì hỏng hoàn toàn, mốc phủ kín, mùi thối.",
                            microbeInfo: "Aspergillus flavus, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây ung thư"
                            ],
                            spoilage: 100
                        },
                        15: {
                            title: "Bánh mì - Sau 15 ngày (Nóng ẩm, 35°C)",
                            description: "Bánh mì phân hủy, đầy nấm mốc và vi khuẩn.",
                            microbeInfo: "Fusarium, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Bánh mì - Sau 20 ngày (Nóng ẩm, 35°C)",
                            description: "Bánh mì bị phân hủy hoàn toàn, không còn hình dạng.",
                            microbeInfo: "Fusarium, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        }
                    }
                }
            },
            yogurt: {
                name: "Sữa chua",
                class: "yogurt",
                info: {
                    normal: {
                        0: {
                            title: "Sữa chua - Hiện tại (Thường, 25°C)",
                            description: "Sữa chua tươi, vị chua dịu, chứa lợi khuẩn.",
                            microbeInfo: "Lactobacillus bulgaricus, Streptococcus thermophilus",
                            benefits: [
                                "Cung cấp probiotic",
                                "Giàu canxi và protein"
                            ],
                            harms: [
                                "Không phù hợp với người không dung nạp lactose"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Sữa chua - Sau 3 ngày (Thường, 25°C)",
                            description: "Sữa chua bắt đầu tách nước nhẹ, vị chua hơn.",
                            microbeInfo: "Lactobacillus, Candida",
                            benefits: [
                                "Vẫn chứa probiotic",
                                "An toàn nếu bảo quản tốt"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn nếu không đậy kín"
                            ],
                            spoilage: 30
                        },
                        5: {
                            title: "Sữa chua - Sau 5 ngày (Thường, 25°C)",
                            description: "Sữa chua tách nước, vị chua mạnh. Vi khuẩn có hại phát triển.",
                            microbeInfo: "Lactobacillus acidophilus, Candida",
                            benefits: [
                                "Vẫn chứa một số lợi khuẩn"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Rối loạn tiêu hóa"
                            ],
                            spoilage: 60
                        },
                        7: {
                            title: "Sữa chua - Sau 7 ngày (Thường, 25°C)",
                            description: "Sữa chua có mùi chua nồng, có thể có mốc nhẹ. Không nên ăn.",
                            microbeInfo: "Candida, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Rối loạn tiêu hóa"
                            ],
                            spoilage: 80
                        },
                        10: {
                            title: "Sữa chua - Sau 10 ngày (Thường, 25°C)",
                            description: "Sữa chua hỏng, mùi chua nồng, mốc. Không sử dụng được.",
                            microbeInfo: "Pseudomonas, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Chứa vi khuẩn gây bệnh",
                                "Nguy cơ ngộ độc nghiêm trọng"
                            ],
                            spoilage: 95
                        },
                        15: {
                            title: "Sữa chua - Sau 15 ngày (Thường, 25°C)",
                            description: "Sữa chua hỏng hoàn toàn, đầy mốc và vi khuẩn.",
                            microbeInfo: "Aspergillus, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Sữa chua - Sau 20 ngày (Thường, 25°C)",
                            description: "Sữa chua phân hủy, không còn hình dạng ban đầu.",
                            microbeInfo: "Fusarium, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        }
                    },
                    fridge: {
                        0: {
                            title: "Sữa chua - Hiện tại (Tủ lạnh, 4°C)",
                            description: "Sữa chua tươi, giữ được lợi khuẩn trong tủ lạnh.",
                            microbeInfo: "Lactobacillus bulgaricus, Streptococcus thermophilus",
                            benefits: [
                                "Cung cấp probiotic",
                                "Tốt cho tiêu hóa"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Sữa chua - Sau 3 ngày (Tủ lạnh, 4°C)",
                            description: "Sữa chua vẫn tươi, vị chua dịu, không thay đổi nhiều.",
                            microbeInfo: "Lactobacillus",
                            benefits: [
                                "Giữ nguyên lợi khuẩn",
                                "An toàn để sử dụng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 5
                        },
                        5: {
                            title: "Sữa chua - Sau 5 ngày (Tủ lạnh, 4°C)",
                            description: "Sữa chua vẫn tươi, ít tách nước nhờ nhiệt độ thấp.",
                            microbeInfo: "Lactobacillus - Lợi khuẩn",
                            benefits: [
                                "Giữ nguyên lợi khuẩn",
                                "An toàn để sử dụng"
                            ],
                            harms: [
                                "Hơi chua hơn"
                            ],
                            spoilage: 10
                        },
                        7: {
                            title: "Sữa chua - Sau 7 ngày (Tủ lạnh, 4°C)",
                            description: "Sữa chua tách nước nhẹ, vẫn ăn được.",
                            microbeInfo: "Lactobacillus, Candida",
                            benefits: [
                                "Vẫn chứa lợi khuẩn",
                                "An toàn nếu đậy kín"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn nếu không đậy kín"
                            ],
                            spoilage: 20
                        },
                        10: {
                            title: "Sữa chua - Sau 10 ngày (Tủ lạnh, 4°C)",
                            description: "Sữa chua tách nước, vẫn ăn được nếu bảo quản tốt.",
                            microbeInfo: "Lactobacillus, Candida",
                            benefits: [
                                "Vẫn chứa lợi khuẩn"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn nếu không đậy kín"
                            ],
                            spoilage: 25
                        },
                        15: {
                            title: "Sữa chua - Sau 15 ngày (Tủ lạnh, 4°C)",
                            description: "Sữa chua có mùi chua mạnh, có thể có mốc nhẹ. Không nên ăn.",
                            microbeInfo: "Candida, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Mùi vị khó chịu"
                            ],
                            spoilage: 60
                        },
                        20: {
                            title: "Sữa chua - Sau 20 ngày (Tủ lạnh, 4°C)",
                            description: "Sữa chua hỏng, có mốc và mùi hôi. Không sử dụng được.",
                            microbeInfo: "Pseudomonas, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa vi khuẩn gây bệnh"
                            ],
                            spoilage: 90
                        }
                    },
                    hot: {
                        0: {
                            title: "Sữa chua - Hiện tại (Nóng ẩm, 35°C)",
                            description: "Sữa chua tươi nhưng dễ hỏng do nhiệt độ cao.",
                            microbeInfo: "Lactobacillus bulgaricus",
                            benefits: [
                                "Cung cấp probiotic"
                            ],
                            harms: [
                                "Dễ bị nhiễm khuẩn"
                            ],
                            spoilage: 5
                        },
                        3: {
                            title: "Sữa chua - Sau 3 ngày (Nóng ẩm, 35°C)",
                            description: "Sữa chua tách nước, mùi chua mạnh, vi khuẩn phát triển.",
                            microbeInfo: "Candida, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Rối loạn tiêu hóa"
                            ],
                            spoilage: 60
                        },
                        5: {
                            title: "Sữa chua - Sau 5 ngày (Nóng ẩm, 35°C)",
                            description: "Sữa chua hỏng, tách nước mạnh, mùi chua nồng.",
                            microbeInfo: "Pseudomonas, Candida",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Rối loạn tiêu hóa"
                            ],
                            spoilage: 85
                        },
                        7: {
                            title: "Sữa chua - Sau 7 ngày (Nóng ẩm, 35°C)",
                            description: "Sữa chua hỏng nặng, có mốc và mùi thối. Không an toàn.",
                            microbeInfo: "Aspergillus, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa vi khuẩn gây bệnh"
                            ],
                            spoilage: 95
                        },
                        10: {
                            title: "Sữa chua - Sau 10 ngày (Nóng ẩm, 35°C)",
                            description: "Sữa chua hỏng hoàn toàn, đầy mốc và mùi thối.",
                            microbeInfo: "Aspergillus, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây bệnh"
                            ],
                            spoilage: 100
                        },
                        15: {
                            title: "Sữa chua - Sau 15 ngày (Nóng ẩm, 35°C)",
                            description: "Sữa chua phân hủy, không còn hình dạng ban đầu.",
                            microbeInfo: "Fusarium, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Sữa chua - Sau 20 ngày (Nóng ẩm, 35°C)",
                            description: "Sữa chua bị phân hủy hoàn toàn, đầy vi khuẩn và mốc.",
                            microbeInfo: "Clostridium, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    }
                }
            },
            soup: {
                name: "Canh",
                class: "soup",
                info: {
                    normal: {
                        0: {
                            title: "Canh - Hiện tại (Thường, 25°C)",
                            description: "Canh nóng, thơm ngon. Môi trường nước dễ nhiễm khuẩn.",
                            microbeInfo: "Bacillus, Lactobacillus",
                            benefits: [
                                "Dễ tiêu hóa",
                                "Cung cấp dinh dưỡng"
                            ],
                            harms: [
                                "Dễ nhiễm khuẩn nếu không bảo quản"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Canh - Sau 3 ngày (Thường, 25°C)",
                            description: "Canh bắt đầu có mùi chua nhẹ, bọt khí xuất hiện.",
                            microbeInfo: "Lactobacillus, Clostridium",
                            benefits: [
                                "Có thể đun sôi để dùng"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn phát triển",
                                "Mùi vị thay đổi"
                            ],
                            spoilage: 40
                        },
                        5: {
                            title: "Canh - Sau 5 ngày (Thường, 25°C)",
                            description: "Canh có mùi chua, bọt khí. Vi khuẩn phân hủy phát triển.",
                            microbeInfo: "Clostridium, Pseudomonas",
                            benefits: [
                                "Có thể đun sôi để dùng"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Rối loạn tiêu hóa"
                            ],
                            spoilage: 70
                        },
                        7: {
                            title: "Canh - Sau 7 ngày (Thường, 25°C)",
                            description: "Canh hỏng, mùi chua nồng, có thể có mốc. Không an toàn.",
                            microbeInfo: "Pseudomonas, Salmonella",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Nhiễm khuẩn đường ruột"
                            ],
                            spoilage: 90
                        },
                        10: {
                            title: "Canh - Sau 10 ngày (Thường, 25°C)",
                            description: "Canh hỏng, mùi thối, nấm mốc. Không sử dụng được.",
                            microbeInfo: "Salmonella, E. coli, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 95
                        },
                        15: {
                            title: "Canh - Sau 15 ngày (Thường, 25°C)",
                            description: "Canh phân hủy, đầy vi khuẩn và mốc. Không sử dụng được.",
                            microbeInfo: "E. coli, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây bệnh"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Canh - Sau 20 ngày (Thường, 25°C)",
                            description: "Canh bị phân hủy hoàn toàn, đầy nấm mốc và vi khuẩn.",
                            microbeInfo: "Fusarium, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    },
                    fridge: {
                        0: {
                            title: "Canh - Hiện tại (Tủ lạnh, 4°C)",
                            description: "Canh tươi, giữ được chất dinh dưỡng trong tủ lạnh.",
                            microbeInfo: "Bacillus, Lactobacillus",
                            benefits: [
                                "Dễ tiêu hóa",
                                "Giữ nguyên dinh dưỡng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Canh - Sau 3 ngày (Tủ lạnh, 4°C)",
                            description: "Canh vẫn tươi, không có mùi chua nhờ nhiệt độ thấp.",
                            microbeInfo: "Lactobacillus",
                            benefits: [
                                "Vẫn ăn được",
                                "Giữ chất dinh dưỡng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 10
                        },
                        5: {
                            title: "Canh - Sau 5 ngày (Tủ lạnh, 4°C)",
                            description: "Canh vẫn tốt, ít thay đổi nhờ nhiệt độ thấp.",
                            microbeInfo: "Lactobacillus - Vi khuẩn nhẹ",
                            benefits: [
                                "Vẫn ăn được",
                                "Giữ chất dinh dưỡng"
                            ],
                            harms: [
                                "Hơi chua nếu không đậy kín"
                            ],
                            spoilage: 15
                        },
                        7: {
                            title: "Canh - Sau 7 ngày (Tủ lạnh, 4°C)",
                            description: "Canh bắt đầu chua nhẹ, có thể có vi khuẩn nếu không đậy kín.",
                            microbeInfo: "Pseudomonas - Vi khuẩn nhẹ",
                            benefits: [
                                "Có thể đun sôi để dùng"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn nếu bảo quản không tốt"
                            ],
                            spoilage: 30
                        },
                        10: {
                            title: "Canh - Sau 10 ngày (Tủ lạnh, 4°C)",
                            description: "Canh bắt đầu chua, có thể có vi khuẩn nếu không đậy kín.",
                            microbeInfo: "Pseudomonas - Vi khuẩn nhẹ",
                            benefits: [
                                "Có thể đun sôi để dùng"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn nếu bảo quản không tốt"
                            ],
                            spoilage: 40
                        },
                        15: {
                            title: "Canh - Sau 15 ngày (Tủ lạnh, 4°C)",
                            description: "Canh có mùi chua nồng, có thể có mốc. Không an toàn.",
                            microbeInfo: "Salmonella, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Nhiễm khuẩn đường ruột"
                            ],
                            spoilage: 70
                        },
                        20: {
                            title: "Canh - Sau 20 ngày (Tủ lạnh, 4°C)",
                            description: "Canh hỏng, mùi thối, nấm mốc. Không sử dụng được.",
                            microbeInfo: "Salmonella, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 90
                        }
                    },
                    hot: {
                        0: {
                            title: "Canh - Hiện tại (Nóng ẩm, 35°C)",
                            description: "Canh tươi nhưng dễ hỏng do môi trường nóng ẩm.",
                            microbeInfo: "Bacillus, Lactobacillus",
                            benefits: [
                                "Cung cấp dinh dưỡng"
                            ],
                            harms: [
                                "Dễ nhiễm khuẩn nhanh"
                            ],
                            spoilage: 10
                        },
                        3: {
                            title: "Canh - Sau 3 ngày (Nóng ẩm, 35°C)",
                            description: "Canh bắt đầu có mùi chua mạnh, bọt khí.",
                            microbeInfo: "Clostridium, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Rối loạn tiêu hóa"
                            ],
                            spoilage: 60
                        },
                        5: {
                            title: "Canh - Sau 5 ngày (Nóng ẩm, 35°C)",
                            description: "Canh hỏng, mùi chua nồng, bọt khí mạnh.",
                            microbeInfo: "Clostridium, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Nhiễm khuẩn đường tiêu hóa"
                            ],
                            spoilage: 90
                        },
                        7: {
                            title: "Canh - Sau 7 ngày (Nóng ẩm, 35°C)",
                            description: "Canh hỏng nặng, mùi thối, có mốc. Không an toàn.",
                            microbeInfo: "Salmonella, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 95
                        },
                        10: {
                            title: "Canh - Sau 10 ngày (Nóng ẩm, 35°C)",
                            description: "Canh hỏng hoàn toàn, mùi thối, nấm mốc. Không sử dụng được.",
                            microbeInfo: "Salmonella, E. coli, Aspergillus",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 100
                        },
                        15: {
                            title: "Canh - Sau 15 ngày (Nóng ẩm, 35°C)",
                            description: "Canh phân hủy, đầy vi khuẩn và mốc. Không sử dụng được.",
                            microbeInfo: "E. coli, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố gây bệnh"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Canh - Sau 20 ngày (Nóng ẩm, 35°C)",
                            description: "Canh bị phân hủy hoàn toàn, đầy nấm mốc và vi khuẩn.",
                            microbeInfo: "Fusarium, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    }
                }
            },
            pork: {
                name: "Thịt lợn",
                class: "pork",
                info: {
                    normal: {
                        0: {
                            title: "Thịt lợn - Hiện tại (Thường, 25°C)",
                            description: "Thịt lợn tươi, giàu protein. Cần bảo quản đúng để tránh vi khuẩn.",
                            microbeInfo: "Lactobacillus - Vi khuẩn tự nhiên",
                            benefits: [
                                "Giàu protein và vitamin B",
                                "Cung cấp năng lượng"
                            ],
                            harms: [
                                "Dễ nhiễm khuẩn nếu không bảo quản"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Thịt lợn - Sau 3 ngày (Thường, 25°C)",
                            description: "Thịt lợn bắt đầu có mùi, bề mặt nhớt do vi khuẩn phát triển.",
                            microbeInfo: "Pseudomonas, Salmonella",
                            benefits: [
                                "Vẫn ăn được nếu nấu chín kỹ"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Mùi vị thay đổi"
                            ],
                            spoilage: 40
                        },
                        5: {
                            title: "Thịt lợn - Sau 5 ngày (Thường, 25°C)",
                            description: "Thịt lợn hỏng, mùi hôi, màu thay đổi. Vi khuẩn gây thối rữa.",
                            microbeInfo: "Salmonella, E. coli",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn đường tiêu hóa"
                            ],
                            spoilage: 70
                        },
                        7: {
                            title: "Thịt lợn - Sau 7 ngày (Thường, 25°C)",
                            description: "Thịt lợn hỏng nặng, đầy vi khuẩn, mùi thối mạnh. Không an toàn.",
                            microbeInfo: "Clostridium, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 90
                        },
                        10: {
                            title: "Thịt lợn - Sau 10 ngày (Thường, 25°C)",
                            description: "Thịt lợn phân hủy, màu xám, mùi hôi. Không sử dụng được.",
                            microbeInfo: "E. coli, Salmonella",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố vi khuẩn"
                            ],
                            spoilage: 95
                        },
                        15: {
                            title: "Thịt lợn - Sau 15 ngày (Thường, 25°C)",
                            description: "Thịt lợn hỏng hoàn toàn, đầy vi khuẩn và nấm mốc.",
                            microbeInfo: "Aspergillus, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Thịt lợn - Sau 20 ngày (Thường, 25°C)",
                            description: "Thịt lợn bị phân hủy hoàn toàn, không còn hình dạng ban đầu.",
                            microbeInfo: "Clostridium, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    },
                    fridge: {
                        0: {
                            title: "Thịt lợn - Hiện tại (Tủ lạnh, 4°C)",
                            description: "Thịt lợn tươi, giữ được chất dinh dưỡng trong tủ lạnh.",
                            microbeInfo: "Lactobacillus",
                            benefits: [
                                "Giàu protein",
                                "An toàn để sử dụng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Thịt lợn - Sau 3 ngày (Tủ lạnh, 4°C)",
                            description: "Thịt lợn vẫn tươi, không có mùi hôi nhờ nhiệt độ thấp.",
                            microbeInfo: "Lactobacillus - Vi khuẩn nhẹ",
                            benefits: [
                                "Giữ nguyên chất dinh dưỡng",
                                "An toàn để ăn"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 10
                        },
                        5: {
                            title: "Thịt lợn - Sau 5 ngày (Tủ lạnh, 4°C)",
                            description: "Thịt lợn vẫn tốt, ít thay đổi. Vi khuẩn phát triển chậm.",
                            microbeInfo: "Pseudomonas - Vi khuẩn nhẹ",
                            benefits: [
                                "Vẫn ăn được",
                                "Giữ chất dinh dưỡng"
                            ],
                            harms: [
                                "Hơi nhớt bề mặt nếu không bọc kín"
                            ],
                            spoilage: 20
                        },
                        7: {
                            title: "Thịt lợn - Sau 7 ngày (Tủ lạnh, 4°C)",
                            description: "Thịt lợn bắt đầu có mùi nhẹ, vẫn ăn được nếu nấu chín.",
                            microbeInfo: "Pseudomonas, Salmonella",
                            benefits: [
                                "Vẫn có thể dùng nếu nấu chín kỹ"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn nếu không bọc kín"
                            ],
                            spoilage: 30
                        },
                        10: {
                            title: "Thịt lợn - Sau 10 ngày (Tủ lạnh, 4°C)",
                            description: "Thịt lợn có mùi, màu thay đổi nhẹ. Cần kiểm tra kỹ.",
                            microbeInfo: "Salmonella, E. coli",
                            benefits: [
                                "Có thể dùng nếu nấu chín"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nếu không nấu kỹ"
                            ],
                            spoilage: 50
                        },
                        15: {
                            title: "Thịt lợn - Sau 15 ngày (Tủ lạnh, 4°C)",
                            description: "Thịt lợn hỏng, mùi hôi, bề mặt nhớt. Không nên ăn.",
                            microbeInfo: "Clostridium, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn đường tiêu hóa"
                            ],
                            spoilage: 80
                        },
                        20: {
                            title: "Thịt lợn - Sau 20 ngày (Tủ lạnh, 4°C)",
                            description: "Thịt lợn hỏng hoàn toàn, đầy vi khuẩn, không sử dụng được.",
                            microbeInfo: "E. coli, Salmonella",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố vi khuẩn"
                            ],
                            spoilage: 95
                        }
                    },
                    hot: {
                        0: {
                            title: "Thịt lợn - Hiện tại (Nóng ẩm, 35°C)",
                            description: "Thịt lợn tươi nhưng dễ hỏng nhanh do nhiệt độ cao.",
                            microbeInfo: "Lactobacillus",
                            benefits: [
                                "Giàu protein"
                            ],
                            harms: [
                                "Dễ bị nhiễm khuẩn bề mặt"
                            ],
                            spoilage: 5
                        },
                        3: {
                            title: "Thịt lợn - Sau 3 ngày (Nóng ẩm, 35°C)",
                            description: "Thịt lợn có mùi hôi, bề mặt nhớt do vi khuẩn phát triển nhanh.",
                            microbeInfo: "Salmonella, E. coli",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Nhiễm khuẩn đường tiêu hóa"
                            ],
                            spoilage: 60
                        },
                        5: {
                            title: "Thịt lợn - Sau 5 ngày (Nóng ẩm, 35°C)",
                            description: "Thịt lợn hỏng, màu xám, mùi thối. Không an toàn.",
                            microbeInfo: "Clostridium, Pseudomonas",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 90
                        },
                        7: {
                            title: "Thịt lợn - Sau 7 ngày (Nóng ẩm, 35°C)",
                            description: "Thịt lợn hỏng nặng, phân hủy, đầy vi khuẩn. Không sử dụng được.",
                            microbeInfo: "E. coli, Salmonella",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố vi khuẩn"
                            ],
                            spoilage: 95
                        },
                        10: {
                            title: "Thịt lợn - Sau 10 ngày (Nóng ẩm, 35°C)",
                            description: "Thịt lợn phân hủy, mùi hôi mạnh, không còn hình dạng.",
                            microbeInfo: "Clostridium, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        },
                        15: {
                            title: "Thịt lợn - Sau 15 ngày (Nóng ẩm, 35°C)",
                            description: "Thịt lợn hỏng hoàn toàn, đầy vi khuẩn và nấm mốc.",
                            microbeInfo: "Aspergillus, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Thịt lợn - Sau 20 ngày (Nóng ẩm, 35°C)",
                            description: "Thịt lợn bị phân hủy hoàn toàn, không còn hình dạng ban đầu.",
                            microbeInfo: "Clostridium, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    }
                }
            },
            fish: {
                name: "Cá",
                class: "fish",
                info: {
                    normal: {
                        0: {
                            title: "Cá - Hiện tại (Thường, 25°C)",
                            description: "Cá tươi, giàu omega-3. Cần bảo quản đúng để tránh vi khuẩn.",
                            microbeInfo: "Vibrio, Lactobacillus - Vi khuẩn tự nhiên",
                            benefits: [
                                "Giàu omega-3 và protein",
                                "Tốt cho tim mạch"
                            ],
                            harms: [
                                "Dễ hỏng nếu không bảo quản"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Cá - Sau 3 ngày (Thường, 25°C)",
                            description: "Cá bắt đầu có mùi tanh, bề mặt nhớt do vi khuẩn.",
                            microbeInfo: "Vibrio, Pseudomonas",
                            benefits: [
                                "Vẫn ăn được nếu nấu chín"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Mùi vị thay đổi"
                            ],
                            spoilage: 50
                        },
                        5: {
                            title: "Cá - Sau 5 ngày (Thường, 25°C)",
                            description: "Cá hỏng, mùi hôi mạnh, màu thay đổi. Vi khuẩn gây thối rữa.",
                            microbeInfo: "Listeria, Vibrio",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn đường tiêu hóa"
                            ],
                            spoilage: 80
                        },
                        7: {
                            title: "Cá - Sau 7 ngày (Thường, 25°C)",
                            description: "Cá hỏng nặng, đầy vi khuẩn, mùi thối. Không an toàn.",
                            microbeInfo: "Clostridium, Listeria",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 95
                        },
                        10: {
                            title: "Cá - Sau 10 ngày (Thường, 25°C)",
                            description: "Cá phân hủy, màu xám, mùi hôi. Không sử dụng được.",
                            microbeInfo: "Vibrio, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố vi khuẩn"
                            ],
                            spoilage: 100
                        },
                        15: {
                            title: "Cá - Sau 15 ngày (Thường, 25°C)",
                            description: "Cá hỏng hoàn toàn, đầy vi khuẩn và nấm mốc.",
                            microbeInfo: "Aspergillus, Vibrio",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Cá - Sau 20 ngày (Thường, 25°C)",
                            description: "Cá bị phân hủy hoàn toàn, không còn hình dạng ban đầu.",
                            microbeInfo: "Clostridium, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    },
                    fridge: {
                        0: {
                            title: "Cá - Hiện tại (Tủ lạnh, 4°C)",
                            description: "Cá tươi, giữ được chất dinh dưỡng trong tủ lạnh.",
                            microbeInfo: "Vibrio",
                            benefits: [
                                "Giàu omega-3",
                                "An toàn để sử dụng"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 0
                        },
                        3: {
                            title: "Cá - Sau 3 ngày (Tủ lạnh, 4°C)",
                            description: "Cá vẫn tươi, không có mùi tanh nhờ nhiệt độ thấp.",
                            microbeInfo: "Lactobacillus - Vi khuẩn nhẹ",
                            benefits: [
                                "Giữ nguyên dinh dưỡng",
                                "An toàn để ăn"
                            ],
                            harms: [
                                "Chưa có tác hại đáng kể"
                            ],
                            spoilage: 10
                        },
                        5: {
                            title: "Cá - Sau 5 ngày (Tủ lạnh, 4°C)",
                            description: "Cá vẫn tốt, ít thay đổi. Vi khuẩn phát triển chậm.",
                            microbeInfo: "Pseudomonas - Vi khuẩn nhẹ",
                            benefits: [
                                "Vẫn ăn được",
                                "Giữ chất dinh dưỡng"
                            ],
                            harms: [
                                "Hơi tanh nếu không bọc kín"
                            ],
                            spoilage: 20
                        },
                        7: {
                            title: "Cá - Sau 7 ngày (Tủ lạnh, 4°C)",
                            description: "Cá bắt đầu có mùi tanh nhẹ, vẫn ăn được nếu nấu chín.",
                            microbeInfo: "Vibrio, Pseudomonas",
                            benefits: [
                                "Vẫn có thể dùng nếu nấu chín kỹ"
                            ],
                            harms: [
                                "Nguy cơ vi khuẩn nếu không bọc kín"
                            ],
                            spoilage: 30
                        },
                        10: {
                            title: "Cá - Sau 10 ngày (Tủ lạnh, 4°C)",
                            description: "Cá có mùi, màu thay đổi nhẹ. Cần kiểm tra kỹ.",
                            microbeInfo: "Listeria, Vibrio",
                            benefits: [
                                "Có thể dùng nếu nấu chín"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nếu không nấu kỹ"
                            ],
                            spoilage: 50
                        },
                        15: {
                            title: "Cá - Sau 15 ngày (Tủ lạnh, 4°C)",
                            description: "Cá hỏng, mùi hôi, bề mặt nhớt. Không nên ăn.",
                            microbeInfo: "Clostridium, Listeria",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn đường tiêu hóa"
                            ],
                            spoilage: 80
                        },
                        20: {
                            title: "Cá - Sau 20 ngày (Tủ lạnh, 4°C)",
                            description: "Cá hỏng hoàn toàn, đầy vi khuẩn, không sử dụng được.",
                            microbeInfo: "Vibrio, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố vi khuẩn"
                            ],
                            spoilage: 95
                        }
                    },
                    hot: {
                        0: {
                            title: "Cá - Hiện tại (Nóng ẩm, 35°C)",
                            description: "Cá tươi nhưng dễ hỏng nhanh do nhiệt độ cao.",
                            microbeInfo: "Vibrio",
                            benefits: [
                                "Giàu omega-3"
                            ],
                            harms: [
                                "Dễ bị nhiễm khuẩn bề mặt"
                            ],
                            spoilage: 10
                        },
                        3: {
                            title: "Cá - Sau 3 ngày (Nóng ẩm, 35°C)",
                            description: "Cá có mùi tanh mạnh, bề mặt nhớt do vi khuẩn.",
                            microbeInfo: "Vibrio, Listeria",
                            benefits: [
                                "Không còn lợi ích đáng kể"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc thực phẩm",
                                "Nhiễm khuẩn đường tiêu hóa"
                            ],
                            spoilage: 70
                        },
                        5: {
                            title: "Cá - Sau 5 ngày (Nóng ẩm, 35°C)",
                            description: "Cá hỏng, mùi hôi mạnh, màu thay đổi. Không an toàn.",
                            microbeInfo: "Clostridium, Vibrio",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Nhiễm khuẩn huyết"
                            ],
                            spoilage: 95
                        },
                        7: {
                            title: "Cá - Sau 7 ngày (Nóng ẩm, 35°C)",
                            description: "Cá hỏng nặng, phân hủy, đầy vi khuẩn. Không sử dụng được.",
                            microbeInfo: "Listeria, Clostridium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố vi khuẩn"
                            ],
                            spoilage: 100
                        },
                        10: {
                            title: "Cá - Sau 10 ngày (Nóng ẩm, 35°C)",
                            description: "Cá phân hủy, mùi hôi mạnh, không còn hình dạng.",
                            microbeInfo: "Vibrio, E. coli",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa nhiều độc tố"
                            ],
                            spoilage: 100
                        },
                        15: {
                            title: "Cá - Sau 15 ngày (Nóng ẩm, 35°C)",
                            description: "Cá hỏng hoàn toàn, đầy vi khuẩn và nấm mốc.",
                            microbeInfo: "Aspergillus, Vibrio",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        },
                        20: {
                            title: "Cá - Sau 20 ngày (Nóng ẩm, 35°C)",
                            description: "Cá bị phân hủy hoàn toàn, không còn hình dạng ban đầu.",
                            microbeInfo: "Clostridium, Fusarium",
                            benefits: [
                                "Không còn lợi ích nào"
                            ],
                            harms: [
                                "Nguy cơ ngộ độc nghiêm trọng",
                                "Chứa độc tố nguy hiểm"
                            ],
                            spoilage: 100
                        }
                    }
                }
            }
        };

        // Biến toàn cục
        let selectedFood = 'cheese';
        let selectedTime = '0';
        let selectedCondition = 'normal';
        let selectedTemperature = 25;
        let activeFoodOption = null;
        let activeTimeOption = null;
        let activeConditionOption = null;
        const maxMicrobes = 30;
        const microbesPool = [];

        const conditionTempRanges = {
            normal: { min: 20, max: 30, default: 25 },
            fridge: { min: 0, max: 10, default: 4 },
            hot: { min: 30, max: 50, default: 35 }
        };

        // Khởi tạo mô phỏng
        function initSimulation() {
            // Tạo pool vi sinh vật
            const microbesContainer = document.getElementById('microbesContainer');
            for (let i = 0; i < maxMicrobes; i++) {
                const microbe = document.createElement('div');
                microbe.classList.add('microbe');
                microbesContainer.appendChild(microbe);
                microbesPool.push(microbe);
            }

            // Lưu tham chiếu đến các option active
            activeFoodOption = document.querySelector('.food-options .option.active');
            activeTimeOption = document.querySelector('.time-options .option.active');
            activeConditionOption = document.querySelector('.condition-options .option.active');

            // Thiết lập sự kiện
            document.querySelectorAll('.food-options .option').forEach(option => {
                option.addEventListener('click', handleOptionClick);
                option.addEventListener('keydown', handleOptionKeydown);
            });

            document.querySelectorAll('.time-options .option').forEach(option => {
                option.addEventListener('click', handleOptionClick);
                option.addEventListener('keydown', handleOptionKeydown);
            });

            document.querySelectorAll('.condition-options .option').forEach(option => {
                option.addEventListener('click', handleConditionClick);
                option.addEventListener('keydown', handleOptionKeydown);
            });

            const tempSlider = document.getElementById('temperature');
            tempSlider.addEventListener('input', () => {
                selectedTemperature = parseInt(tempSlider.value);
                document.getElementById('temperatureValue').textContent = `${selectedTemperature}°C`;
                updateSimulation();
            });

            const resetBtn = document.getElementById('resetBtn');
            resetBtn.addEventListener('click', handleReset);
            resetBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleReset();
                }
            });

            updateSimulation();
        }

        // Xử lý sự kiện click cho option (thực phẩm và thời gian)
        function handleOptionClick() {
            const parentClass = this.parentElement.classList;
            let activeOption, parent;
            if (parentClass.contains('food-options')) {
                activeOption = activeFoodOption;
                parent = '.food-options';
                activeFoodOption = this;
                selectedFood = this.getAttribute('data-food');
            } else if (parentClass.contains('time-options')) {
                activeOption = activeTimeOption;
                parent = '.time-options';
                activeTimeOption = this;
                selectedTime = this.getAttribute('data-time');
            }

            activeOption.classList.remove('active');
            this.classList.add('active');
            updateSimulation();
        }

        // Xử lý sự kiện click cho condition
        function handleConditionClick() {
            activeConditionOption.classList.remove('active');
            this.classList.add('active');
            activeConditionOption = this;
            selectedCondition = this.getAttribute('data-condition');
            updateTemperatureRange();
            updateSimulation();
        }

        // Cập nhật phạm vi nhiệt độ dựa trên condition
        function updateTemperatureRange() {
            const range = conditionTempRanges[selectedCondition];
            const tempSlider = document.getElementById('temperature');
            tempSlider.min = range.min;
            tempSlider.max = range.max;
            selectedTemperature = range.default;
            tempSlider.value = selectedTemperature;
            document.getElementById('temperatureValue').textContent = `${selectedTemperature}°C`;
        }

        // Xử lý sự kiện bàn phím
        function handleOptionKeydown(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        }

        // Xử lý nút reset
        function handleReset() {
            activeFoodOption.classList.remove('active');
            activeTimeOption.classList.remove('active');
            activeConditionOption.classList.remove('active');

            activeFoodOption = document.querySelector('.food-options .option[data-food="cheese"]');
            activeTimeOption = document.querySelector('.time-options .option[data-time="0"]');
            activeConditionOption = document.querySelector('.condition-options .option[data-condition="normal"]');

            activeFoodOption.classList.add('active');
            activeTimeOption.classList.add('active');
            activeConditionOption.classList.add('active');

            selectedFood = 'cheese';
            selectedTime = '0';
            selectedCondition = 'normal';
            updateTemperatureRange();

            updateSimulation();
        }

        // Cập nhật mô phỏng
        function updateSimulation() {
            if (!foodData[selectedFood] || !foodData[selectedFood].info[selectedCondition] || !foodData[selectedFood].info[selectedCondition][selectedTime]) {
                console.error('Invalid selection:', selectedFood, selectedCondition, selectedTime);
                return;
            }

            // Điều chỉnh mức độ hư hỏng dựa trên nhiệt độ
            const baseInfo = foodData[selectedFood].info[selectedCondition][selectedTime];
            const tempFactor = (selectedTemperature - conditionTempRanges[selectedCondition].min) / (conditionTempRanges[selectedCondition].max - conditionTempRanges[selectedCondition].min);
            const spoilage = Math.min(100, Math.round(baseInfo.spoilage * (1 + tempFactor * 0.5)));

            const food = foodData[selectedFood];
            const timeInfo = {
                ...baseInfo,
                title: `${baseInfo.title.split('(')[0].trim()} (${selectedCondition === 'normal' ? 'Thường' : selectedCondition === 'fridge' ? 'Tủ lạnh' : 'Nóng ẩm'}, ${selectedTemperature}°C)`,
                spoilage
            };

            const foodDisplay = document.querySelector('.food-display');
            const foodItem = document.getElementById('foodItem');

            foodDisplay.classList.add('loading');
            foodItem.classList.add('changing');

            setTimeout(() => {
                foodItem.className = `food-item ${food.class} darken-${selectedTime}`;
                foodItem.style.background = '';
                document.getElementById('foodName').textContent = food.name;

                foodItem.classList.toggle('show-mold', spoilage >= 80);

                document.getElementById('dayText').textContent = selectedTime === '0' ? 'Hiện tại' : `Sau ${selectedTime} ngày`;
                document.getElementById('spoilageBar').style.width = `${spoilage}%`;
                document.getElementById('spoilageText').textContent = `${spoilage}% hư hỏng`;

                document.getElementById('infoTitle').textContent = timeInfo.title;
                document.getElementById('infoContent').innerHTML = `
                    <p>${timeInfo.description}</p>
                    <div class="microbe-info">
                        <h4><i class="fas fa-microscope"></i> Vi sinh vật hiện diện:</h4>
                        <p>${timeInfo.microbeInfo}</p>
                    </div>
                    <div class="benefits">
                        <h4><i class="fas fa-thumbs-up"></i> Lợi ích:</h4>
                        <ul>
                            ${timeInfo.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="harm">
                        <h4><i class="fas fa-exclamation-triangle"></i> Tác hại:</h4>
                        <ul>
                            ${timeInfo.harms.map(harm => `<li>${harm}</li>`).join('')}
                        </ul>
                    </div>
                `;

                updateMicrobes(selectedTime, spoilage);

                foodDisplay.classList.remove('loading');
                foodItem.classList.remove('changing');
            }, 300);
        }

        // Cập nhật vi sinh vật
        function updateMicrobes(time, spoilage) {
            requestAnimationFrame(() => {
                let microbeCount = Math.round(spoilage / 3);
                let microbeSize = spoilage / 20 + 3;
                let microbeOpacity = Math.min(0.9, spoilage / 100);

                microbesPool.forEach((microbe, index) => {
                    if (index < microbeCount) {
                        const size = microbeSize + Math.random() * 5;
                        microbe.style.width = `${size}px`;
                        microbe.style.height = `${size}px`;
                        microbe.style.left = `${Math.random() * 100}%`;
                        microbe.style.top = `${Math.random() * 100}%`;
                        microbe.style.backgroundColor = spoilage < 50 ? '#1e90ff' : (spoilage < 80 ? (Math.random() > 0.5 ? '#1e90ff' : '#ff4d4f') : '#ff4d4f');
                        microbe.style.opacity = microbeOpacity;
                        microbe.style.setProperty('--tx', (Math.random() * 2 - 1));
                        microbe.style.setProperty('--ty', (Math.random() * 2 - 1));
                        microbe.style.animationDuration = `${10 + Math.random() * 10}s`;
                        microbe.style.display = 'block';
                    } else {
                        microbe.style.display = 'none';
                    }
                });
            });
        }

        // Khởi chạy mô phỏng
        window.addEventListener('DOMContentLoaded', initSimulation);