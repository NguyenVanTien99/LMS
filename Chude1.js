const questions = [
    {
        question: "Phương án nào dưới đây không phù hợp để minh họa cho hệ thống?",
        options: ["Mô hình AI có thể trả lời câu hỏi dựa trên thông tin từ Wikipedia", "Chatbot có thể trò chuyện và đưa ra câu trả lời hợp lý cho các câu hỏi mở", "Hệ thống an có thể chẩn đoán bệnh dựa trên triệu chứng và bệnh án", "Robot hút bụi tự động làm sạch sàn nhà theo lịch trình định sẵn"],
        answer: "Robot hút bụi tự động làm sạch sàn nhà theo lịch trình định sẵn"
    },
    {
        question: "Trí tuệ nhân tạo còn nhiều hạn chế ở khả năng nào sau đây?",
        options: ["Học và tích lũy tri thức", "Hiểu ngôn ngữ tự nhiên", "Cảm nhận cảm xúc", "Giải quyết vấn đề"],
        answer: "Cảm nhận cảm xúc"
    },
    {
        question: "Công nghệ nhận dạng khuôn mặt không dùng trong công việc nào sau đây?",
        options: ["Mở khoá điện thoại thông minh", "Kiểm soát ra vào toà nhà", "Tìm kiếm ảnh khuôn mặt trên internet", "Xác minh danh tính tại sân bay"],
        answer: "Tìm kiếm ảnh khuôn mặt trên internet"
    },
    {
        question: "Chuẩn kết nối nào dưới đây thường được sử dụng để kết nối các thiết bị âm nhạc với điện thoại di động?",
        options: ["Bluetooth", "NFC", "USB-C", "HDMI"],
        answer: "Bluetooth"
    },
    {
        question: "Phương thức nào sau đây không dùng để kết nối máy tính với điện thoại di động?",
        options: ["Cáp USB", "Bluetooth", "Wifi", "Cáp VGA"],
        answer: "Cáp VGA"
    },
    {
        question: "Khả năng nào sau đây ít phổ biến trong các hệ thống AI?",
        options: ["Khả năng tự phục hồi sau khi hỏng", "Khả năng học từ dữ liệu", "Khả năng suy luận dựa trên bối cảnh", "Khả năng cảm nhận và hiểu biết môi trường"],
        answer: "Khả năng tự phục hồi sau khi hỏng"
    },
    {
        question: "Phần mềm nào dưới đây là trợ lí ảo của công ty Apple?",
        options: ["Google Assistant", "Alexa", "Bixby", "Siri"],
        answer: "Siri"
    },
    {
        question: "Phần mềm nào dưới đây là trợ lí ảo của công ty Samsung?",
        options: ["Google Assistant", "Alexa", "Bixby", "Siri"],
        answer: "Bixby"
    },
    {
        question: "Phần mềm nào dưới đây là trợ lí ảo của công ty Amazon?",
        options: ["Google Assistant", "Alexa", "Bixby", "Siri"],
        answer: "Alexa"
    },
    {
        question: "Trí tuệ nhân tạo hỗ trợ chẩn đoán bệnh bằng cách nào sau đây?",
        options: ["Nhận diện giọng nói của bác sĩ trưởng khoa", "Nhận diện các bệnh lí qua hình ảnh y khoa", "Phân tích giọng nói của bệnh nhân", "Quản lí hoạt động thể dục của bệnh nhân"],
        answer: "Nhận diện các bệnh lí qua hình ảnh y khoa"
    },
    {
        question: "Phát biểu nào dưới đây là thách thức lớn nhất liên quan đến việc sử dụng AI?",
        options: ["AI không lưu trữ và sử dụng quyền riêng tư của cá nhân", "Khả năng AI không vượt qua trí thông minh của con người", "Khả năng AI không làm mất đi một số ngành nghề đang có", "Thiếu quy định và luật lệ về việc sử dụng AI trong xã hội ngày nay"],
        answer: "Thiếu quy định và luật lệ về việc sử dụng AI trong xã hội ngày nay"
    },
    {
        question: "Phương án nào dưới đây liệt kê hai phân loại chính của trí tuệ nhân tạo AI?",
        options: ["AI Hẹp (ANI) và AI Siêu thông minh (ASI)", "AI Hẹp (ANI) và AI Tổng quát (AGI)", "AI Tổng quát (AGI) và AI Tự học (ALI)", "AI Tổng quát (AGI) và AI Siêu thông minh (ASI)"],
        answer: "AI Hẹp (ANI) và AI Tổng quát (AGI)"
    },
    {
        question: "Phương án nào sau đây đúng khi nói về tác động của AI đối với việc làm của con người?",
        options: ["AI thay thế hoàn toàn con người trong mọi lĩnh vực làm việc", "AI tạo ra những việc làm mới và thay thế một số công việc hiện có", "AI chịu tác động đến các công việc đơn giản, lặp đi lặp lại", "AI không có tác động đáng kể đến việc làm của con người"],
        answer: "AI tạo ra những việc làm mới và thay thế một số công việc hiện có"
    },
    {
        question: "YouTube được trang bị hệ thống trí tuệ nhân tạo để gợi ý cho người dùng. Hãy cho biết hệ thống này làm nhiệm vụ gì dưới đây?",
        options: ["Hiển thị các quảng cáo phù hợp với người dùng", "Đề xuất các video dựa trên sở thích của người dùng", "Đề xuất các chức năng mới của YouTube", "Đề xuất các video có số lượng xem nhiều"],
        answer: "Đề xuất các video dựa trên sở thích của người dùng"
    },
    {
        question: "Nhận định nào sau đây là SAI khi nói về sự ảnh hưởng của AI trong tương lai?",
        options: ["AI có thể thay thế con người trong một số lĩnh vực", "AI tạo ra nguy cơ về an ninh mạng và quyền riêng tư", "AI sẽ luôn an toàn và có lợi cho con người"],
        answer: "AI sẽ luôn an toàn và có lợi cho con người"
    },
    {
        question: "Chọn đúng hoặc sai cho từng câu sau:",
        type: "multiple-true-false", // Loại câu hỏi đúng/sai cho từng lựa chọn
        options: [
            { option: "HTML là ngôn ngữ lập trình.", correctAnswer: "Sai" },
            { option: "CSS là ngôn ngữ để tạo kiểu cho trang web.", correctAnswer: "Đúng" },
            { option: "JavaScript chỉ chạy ở phía máy chủ.", correctAnswer: "Sai" },
            { option: "PHP là ngôn ngữ phía máy khách.", correctAnswer: "Sai" }
        ]
    }
];

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestions() {
    const shuffledQuestions = shuffleQuestions(questions);
    const quizForm = document.getElementById('quiz-form');

    shuffledQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        let optionsHtml = '';

        if (q.type === 'multiple-true-false') {
            q.options.forEach((option, optIndex) => {
                optionsHtml += `
                    <p>${String.fromCharCode(97 + optIndex)}. ${option.option}</p>
                    <label class="answer-button">
                        <input type="radio" name="question${index}_${optIndex}" value="Đúng" data-correct="${option.correctAnswer}" onclick="handleSelection(this)"> Đúng
                    </label>
                    <label class="answer-button">
                        <input type="radio" name="question${index}_${optIndex}" value="Sai" data-correct="${option.correctAnswer}" onclick="handleSelection(this)"> Sai
                    </label><br>
                `;
            });
        } else {
            // Hiển thị cho các câu hỏi nhiều lựa chọn thông thường
            optionsHtml = q.options.map((option, optIndex) => `
                <label class="answer-button">
                    <input type="radio" name="question${index}" value="${option}" onclick="handleSelection(this)"> ${option}
                </label><br>
            `).join('');
        }

        questionDiv.innerHTML = `
            <h2 class="question-title">Câu hỏi ${index + 1}:</h2>
            <p class="question-text">${q.question}</p>
            ${optionsHtml}
        `;
        quizForm.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let totalScore = 0;
    let correctAnswersCount = 0;

    questions.forEach((q, index) => {
        if (q.type === 'multiple-true-false') {
            let correctCount = 0;

            q.options.forEach((option, optIndex) => {
                const selected = document.querySelector(`input[name="question${index}_${optIndex}"]:checked`);
                if (selected && selected.value === option.correctAnswer) {
                    correctCount++;
                }
            });

            // Tính điểm cho câu hỏi đúng/sai
            if (correctCount === q.options.length) { // Nếu tất cả các đáp án đều đúng
                totalScore += 1;
            } else if (correctCount >= Math.floor(q.options.length / 2)) { // Nếu đúng hơn 1/2 số lựa chọn
                totalScore += 0.5;
            }
        } else {
            // Kiểm tra các câu hỏi nhiều lựa chọn thông thường
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if (selected && selected.value === q.answer) {
                correctAnswersCount++;
                totalScore += 1;  // Cộng 1 điểm nếu trả lời đúng
            }
        }
    });

    const resultText = `Bạn đã trả lời đúng ${correctAnswersCount} câu hỏi nhiều lựa chọn. Tổng điểm: ${totalScore}`;
    document.getElementById('result-text').innerText = resultText;
    document.getElementById('result-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('result-modal').style.display = 'none'; // Đóng modal kết quả
    goHome(); // Chuyển hướng về trang chính
}

function goHome() {
    window.location.href = './Thithu.html'; // Địa chỉ trang chủ
}

window.onload = () => {
    displayQuestions(); // Hiển thị câu hỏi khi tải trang
};

function handleSelection(selectedInput) {
    const questionName = selectedInput.name;
    const allOptions = document.getElementsByName(questionName);

    allOptions.forEach(option => {
        const parentLabel = option.parentElement;
        if (option.checked) {
            if (option.value === option.dataset.correct) {
                parentLabel.style.backgroundColor = "#29802d"; 
            } else {
                parentLabel.style.backgroundColor = "#29802d"; 
            }
            parentLabel.style.color = "#fff";
        } else {
            if (option.dataset.correct === option.value) {
                parentLabel.style.backgroundColor = "#60ac62";
            } else {
                parentLabel.style.backgroundColor = "#60ac62"; 
            }
            parentLabel.style.color = "#fff";
        }
    });
}
