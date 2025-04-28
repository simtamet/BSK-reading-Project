**รายชื่อสมาชิก กลุ่ม kubbro**
=============================
1. นางสาวญาณิศา ล้อมเมตตา 66102010237
2. นางสาวศิวัชญา ราศรี 66102010570
3. นางสาวเอมี่หลุยส์ บราวน์ 66102010572      

**ที่มาของปัญหาและความสำคัญ**
=============================

ในปัจจุบัน เทคโนโลยีและโซเชียลมีเดียมีบทบาทสำคัญในชีวิตประจำวันของนักเรียนมัธยม ทำให้พฤติกรรมการใช้เวลาว่างเปลี่ยนไป หลายคนหันไปใช้เวลาบนแพลตฟอร์มดิจิทัล เช่น การเล่นเกม การเลื่อนฟีดโซเชียล หรือการดูวิดีโอ มากกว่าการอ่านหนังสือ ส่งผลให้ความสนใจในการอ่านลดลง ซึ่งอาจกระทบต่อพัฒนาการทางความคิด ทักษะการอ่านวิเคราะห์ และการเรียนรู้โดยรวม 
ด้วยเหตุนี้ การสร้างเว็บไซต์ที่ช่วยแนะนำหนังสือและติดตามพฤติกรรมการอ่านจึงเป็นแนวทางที่สามารถช่วยแก้ไขปัญหานี้ เว็บไซต์จะทำให้การอ่านเป็นเรื่องสนุกและน่าสนใจขึ้นผ่านระบบติดตามเป้าหมายการอ่าน การให้รางวัลเสมือน หรือการแชร์รีวิวหนังสือกับเพื่อน ๆ อีกทั้งยังช่วยแนะนำหนังสือที่เหมาะกับแต่ละบุคคล ทำให้ผู้อ่านค้นพบหนังสือที่ตรงกับความสนใจได้ง่ายขึ้น 
เว็บไซต์นี้ไม่เพียงแต่ช่วยกระตุ้นให้เยาวชนกลับมาสนใจการอ่าน แต่ยังเป็นเครื่องมือที่ใช้เทคโนโลยีให้เกิดประโยชน์ในทางสร้างสรรค์ การสร้างคอมมูนิตี้ของนักอ่านรุ่นใหม่จะช่วยให้การอ่านกลายเป็นกิจกรรมที่ได้รับความนิยมมากขึ้น และส่งเสริมวัฒนธรรมการอ่านให้เข้มแข็งขึ้นในสังคมเยาวชน

**จุดประสงค์ของโครงงาน**
===============================


1. เพื่อส่งเสริมการอ่านหนังสือให้ผู้ใช้งานสนใจการอ่านหนังสือมากขึ้น และเพิ่มความต่อเนื่องในการอ่าน
2. เพื่อช่วยให้การค้นหาหนังสือเป็นเรื่องที่ง่ายและสะดวก
3. เพื่อลดอัตราการซื้อหนังสือที่ไม่ตรงกับความต้องการของผู้ใช้งาน
4. เพื่อให้ผู้ใช้งานมีแนวทางในการเลือกหนังสือและตัดสินใจซื้อหนังสือได้ง่ายขึ้น

**ประโยชน์ที่คาดว่าจะได้รับ**
===============================

1. ผู้ใช้งานมีความสนใจในการอ่านหนังสือมากขึ้น และสามารถอ่านได้อย่างต่อเนื่อง
2. การค้นหาหนังสือมีความรวดเร็วและสะดวกมากยิ่งขึ้น
3. ลดการเสียเงินหรือทรัพยากรในการซื้อหนังสือที่ไม่ตรงกับความต้องการ
4. ผู้ใช้งานสามารถเลือกหนังสือได้ตรงกับความชอบและความสนใจของตนเองมากขึ้น ทำให้การตัดสินใจซื้อง่ายขึ้น

**ขอบเขตของโครงงาน**
====================

- เป็นเว็บไซต์แนะนำหนังสือ
- มีระบบ sign up และ log in
- มีระบบรีวิวหนังสือที่เป็นที่นิยมโดยแบ่งตาม  category
- มีระบบ streak กับเพื่อน เพื่อที่จะเพิ่มแรงบันดาลใจในการอ่านหนังสือ
- มีระบบ book list เพื่อเพิ่มเป้าหมายในการอ่านหนังสือ
- มีระบบจัดคะแนนตามแต่ละหมวดหนังสือ
- เพิ่ม dark mode

**Data structure** **ที่ใช้**
=============================

     Data structure ที่เลือกใช้สำหรับเว็บรีวิวหนังสือคือ Priority queue เนื่องจาก Priority queue ใช้โครงสร้าง Max - Heap หรือ Min - Heap ซึ่งสามารถดึงข้อมูลที่มีความนิยมมากที่สุดเพื่อแสดงบนเว็บได้ และเมื่อมีการเพิ่มข้อมูลก็สามารถอัพเดทข้อมูลได้ทันที และเมื่อเว็บรีวิวหนังสือมีจำนวนผู้ใช้เพิ่มขึ้น การใช้ Priority Queue จะช่วยให้สามารถรองรับข้อมูลจำนวนมากและยังคงมีประสิทธิภาพในการจัดการข้อมูลและเรียงลำดับอย่างต่อเนื่อง มีการใช้ API ในการเรียกข้อมูลหนังสือจากไฟล์ JSON

**Functional Requirements**
===========================

1. ระบบมีการ Sign up และ  Login เพื่อให้ระบบมีความปลอดภัยและสามารถเชื่อถือได้
2. ระบบจะต้องมีการแบ่งหมวดหมู่ของหนังสือตามอารมณ์เพื่อที่ผู้ใช้งานจะสามารถหาหนังสือที่เหมาะกับตนเองมากที่สุด
3. ระบบมีการเรียงลำดับหนังบนหน้าเว็บในแต่ละหมวดหมู่ตามคะแนนรีวิวเพื่อประกอบการตัดสินใจของผู้ใช้งาน
4. ระบบจะต้องมีฟังก์ชัน Book list เพื่อที่ผู้ใช้งานจะสามารถลิสต์หนังสือที่ต้องการอ่านได้
5. ผู้ใช้งานสามารถเขียนรีวิวและให้คะแนนหนังสือนั้น ๆ ได้
6. ผู้ใช้งานสามารถแก้ไข เพิ่ม หรือลบรีวิวของตนเองได้
7. ผู้ใช้งานสามารถทำ Streak กับเพื่อนได้
8. ผู้ดูแลระบบสามารถเพิ่ม หรือ ลบข้อมูลหนังสือบนเว็บและรีวิวที่ไม่เหมาะสมได้

**Non-Functional Requirements**
===============================

1. ระบบมีโทนสีสวยงาม สบายตา
2. ระบบสามารถเปลี่ยนเป็น Dark mode
3. ระบบสามารถรองรับการแสดงผลได้เป็นอย่างดีในทุก Web Browser และสามารถใช้งานได้ทั้งบน IOS และ Android
4. ระบบสามารถรองรับการเพิ่มจำนวนของหนังสือและรีวิวได้อย่างไม่มีขีดจำกัด
5. ระบบจะต้องมีตัวหนังสือที่อ่านง่าย

**design and architecture**
===============================

**ภายในโปรเจกต์ประกอบด้วย** <br>
**1.folder views** <br>

![Screenshot 2025-04-04 182207.png](/.attachments/Screenshot%202025-04-04%20182207-7c839b37-cc5d-4f99-934f-e6f86e20e812.png)

1.1. book_list.ejs : หน้าเว็บสำหรับแสดงหน้าหนังสือที่ผู้ใช้เพิ่มเป็นรายการโปรด <br>

1.2. communityReviewsPage.ejs : หน้าเว็บสำหรับแสดงคอมเมนต์รีวิวหนังสือ โดยแสดงเป็นหลาย ๆ คอมเม้นของผู้ใช้ <br>

1.3. homepage.ejs : เป็นหน้าเว็บเกี่ยวกับการอ่านหนังสือออนไลน์ และมีฟีเจอร์ต่าง ๆ ที่ช่วยให้ผู้ใช้ติดตามและจัดการการอ่านของตัวเองได้ง่ายขึ้น <br>

1.4. ratingPage.ejs : หน้าเว็บสำหรับการ rate หนังสือโดยสามารถกรอกชื่อผู้แต่ง ชื่อหนังสือ เพิ่มรูปปกหนังสือ ให้คะแนนและเขียนรีวิวได้ <br>

1.5. reviewPage.ejs : หน้าเว็บสำหรับแสดงข้อมูลหนังสือและรายละเอียดข้อมูลรีวิว คะแนนรีวิวต่าง ๆ <br>

1.6. save_reading_session.ejs : หน้าสำหรับฟีเจอร์ที่ให้ผู้ใช้บันทึกข้อมูลเกี่ยวกับการอ่านหนังสือ แบบรายครั้ง คล้ายกับการบันทึกไดอารี่การอ่านแต่ละครั้ง  <br>

1.7. signin.ejs : หน้าเว็บสำหรับลงชื่อเข้าในกรณีที่ผู้ใช้มีบัญชีแล้ว <br>

1.8. signup.ejs : หน้าเว็บสำหรับลงชื่อเข้าในกรณีที่ผู้ใช้ยังไม่มีบัญชี <br>

1.9. streak_page.ejs : หน้าเว็บปลูกต้นไม้เก็บสะสมวันตามการเข้าใช้ของผู้ใช้งาน <br>

1.10. trackingPage.ejs : หน้าสำหรับฟีเจอร์ที่ช่วยให้ผู้ใช้ ดูภาพรวม ของหนังสือที่กำลังอ่าน แสดง หนังสือที่อ่านอยู่ หนังสือที่อ่านจบ หนังสือที่อยากอ่าน <br>

1.11. user_profile.ejs : หน้าเว็บสำหรับการแก้ไขข้อมูลส่วนตัวของผู้ใช้งาน <br>

**2.Folder public** <br>

2.1.Img ใช้เก็บรูปต่าง ๆ ที่ต้องใช้ในเว็บ<br>

![Picture1.png](/.attachments/Picture1-36a6dd60-0f88-4e42-b597-546c8718af0e.png)
![Picture2.png](/.attachments/Picture2-61deb8fe-03b7-47bf-9d67-485a647416cc.png)

**3.folder test** <br>

![Screenshot 2025-04-04 182800.png](/.attachments/Screenshot%202025-04-04%20182800-6835520a-1686-42c9-81f5-48777eee77de.png)

3.1 bookModel.test.js : ใช้ในการทดสอบ class Book ทดสอบฟังก์ชันการทำงานหลักๆ ที่เกี่ยวข้องกับการจัดการหนังสือและรีวิว <br>

3.2 bookReviewManager.test.js : ใช้ในการทดสอบ class Review , BookReviewManager ครอบคลุมการทดสอบฟังก์ชันหลักที่เกี่ยวข้องกับการจัดการหนังสือและรีวิว รวมถึงการบันทึกและโหลดข้อมูลจากไฟล์ JSON <br>

**4.folder controllers** <br>

![Picture3.png](/.attachments/Picture3-096a8b16-4d4c-4c9b-b805-8f8daf10b9e2.png)

4.1 bookController.js : เป็น Controller สำหรับ API ที่ใช้จัดการข้อมูลหนังสือในระบบ โดยทำงานร่วมกับไฟล์ books.json เพื่อเก็บข้อมูลหนังสือค้นหาหนังสือ<br>

4.2 ratingController.js : เอาไว้จัดการกับการให้คะแนนหนังสือ<br>

4.3 streakController.js : จัดการเกี่ยวกับสถิติต่อเนื่อง เช่นการอ่านหนังสือต่อเนื่องหลายวัน<br>

4.4 trackingController.js : จัดการเกี่ยวกับการติดตามการอ่านหรือความคืบหน้า<br>

4.5 userController.js : จัดการข้อมูลผู้ใช้ เช่น การสมัครสมาชิก ล็อกอิน อัปเดตโปรไฟล์ควบคุมการเข้าถึงและความปลอดภัยของบัญชีผู้ใช้งาน ดูแลระบบบัญชีให้มีความปลอดภัยและเป็นส่วนตัว<br>

**5.file อื่นที่เกี่ยวข้อง**

![Picture4.png](/.attachments/Picture4-a0a1833c-c251-4152-945b-9d6e9782788f.png)

5.1 index.js : เป็น Express.js Backend Server สำหรับจัดการหนังสือและรีวิว โดยใช้EJS เป็น template engine และรองรับ session-based authentication <br>

5.2 package-lock.json , package.json : ใช้กำหนดข้อมูลโปรเจกต์และแพ็กเกจที่ต้องใช้ <br>

5.3 util.js : เป็น คลาส Encryption ที่ใช้ crypto ใน Node.js เพื่อ เข้ารหัส (Hashing) ข้อความ ด้วย pbkdf2Sync และส่งออกผลลัพธ์เป็นค่า Hash <br>

**6.Screen shot ตัวอย่างโค้ดในโปรเจกต์**

![Picture5.png](/.attachments/Picture5-401c2035-8a81-412e-b346-df3dd9cb8dc3.png)![Picture6.png](/.attachments/Picture6-d4ddb262-3a0d-4145-b3a0-3ec9efc66b4d.png)

**หน้าเว็บไซต์** 
===============================

*   signin.html
    

![==image_0==.png](/.attachments/==image_0==-9f7090f6-3e79-4537-bcb5-ee604cb0062b.png)  

*   signup.html 
    

![==image_1==.png](/.attachments/==image_1==-f7b7afa0-4893-4d65-b39a-71d38fe4416f.png)  

*   homepage.html 
    

![image.png](/.attachments/image-1571d6b4-8a27-4f8a-82c6-4d95bd5e09f6.png) 

*   streak_page.html 
    

![==image_3==.png](/.attachments/==image_3==-23e19451-9115-4203-b675-c3fe57871bd5.png)  
![image.png](/.attachments/image-0f4e5831-7e67-4cc4-9dee-174ccfe8e8ae.png)

![==image_4==.png](/.attachments/==image_4==-a4f8d5f4-bc54-4b53-8530-0b0c2d4a33fa.png)  

*   book_list.html 
    

![==image_5==.png](/.attachments/==image_5==-c3751f23-2bb8-441f-89bc-b9bd15f9d0b3.png) ![==image_6==.png](/.attachments/==image_6==-d94e6304-0354-45ba-a62f-271f471dc13c.png)  

*   user_profile.html 
    

![==image_7==.png](/.attachments/==image_7==-4238114b-d593-437c-8927-a4d63ee6e0bf.png)  

![==image_8==.png](/.attachments/==image_8==-4bd82ebe-afc6-4b93-91d9-b2a790ca0aa3.png)  

*   save_reading_session.html 
    

![==image_9==.png](/.attachments/==image_9==-135cec7e-10c6-41f7-afe7-6b731d46ad5f.png)  

![==image_10==.png](/.attachments/==image_10==-b30068af-7157-43ec-a84e-5eb2ecda3106.png)  

![==image_11==.png](/.attachments/==image_11==-0cdf52fd-52ec-41d7-b71f-a9631898e563.png)  

![image.png](/.attachments/image-b65ecba4-3ec3-49bd-b6a5-65424a2644ab.png)

*   tracking.html 
    

![==image_13==.png](/.attachments/==image_13==-757f7c4b-8018-45de-b03a-0ccab525226d.png)  

*   ratingPage.html 
    

![==image_14==.png](/.attachments/==image_14==-f2daea52-9e4a-4007-be31-4213304edbfc.png)  

*   ReviewPage.html 
    

![==image_15==.png](/.attachments/==image_15==-4a9ee310-11ad-4235-ba4e-243a99acf50c.png) ![==image_16==.png](/.attachments/==image_16==-b33927e4-c6d0-4af7-9992-72aa71c4d23d.png)  

*   communityReviewsPage.html 
    

![image.png](/.attachments/image-12f81d20-5857-46c7-8c00-014bb5e2cf69.png)
![image.png](/.attachments/image-1bc6ee2e-9115-4271-98a3-35ece061c7be.png)
*   moodPage.html
![image.png](/.attachments/image-b76d2b98-0579-4f86-9e60-89106bf31656.png)
![image.png](/.attachments/image-84ef8598-7758-40d4-b691-3a37fcbc88d6.png)
![image.png](/.attachments/image-5f5e3a5c-b289-4b7e-a95f-240da6e225ff.png)
![image.png](/.attachments/image-7ca5ba82-75f8-4646-bd47-22e4adf791f9.png)
![image.png](/.attachments/image-0a139cf8-ab5b-471b-a131-03e6fc656f3e.png)
![image.png](/.attachments/image-1a69ecf4-f921-49f7-8dee-1c0ffc81355b.png)
![image.png](/.attachments/image-2f08f76b-76a1-45c2-b97b-869361abb169.png)
![image.png](/.attachments/image-7f78e55e-ae9f-4e20-9a38-189a01ea0354.png)
![image.png](/.attachments/image-b07ec763-c8be-40f3-99b2-4a7035d56c12.png)
![image.png](/.attachments/image-92eb0d0a-9d7b-4b27-bf1e-a0f1000cee48.png)


**Unit test** 
===============================

**Implementation** 

Testcases description 

| <br><br>Test Suite <br><br><br><br><br> | <br><br>Describe <br><br><br><br><br> | <br><br>Test Unit <br><br><br><br><br> | <br><br>Describe <br><br><br><br><br> |
| --- | --- | --- | --- |
| <br><br>1. Test Class BookReviewManager : getBookById <br><br><br><br><br> | <br><br>ทดสอบว่าฟังก์ชัน addBook ของ BookReviewManager ทำงานถูกต้องหรือไม่ <br><br><br><br><br> | <br><br>*   should add books correctly <br>    <br><br><br><br> | <br><br>ทดสอบว่าเมื่อเพิ่มหนังสือ 2 เล่มลงใน bookManager แล้ว จะสามารถดึงข้อมูลหนังสือออกมาได้ถูกต้อง <br><br><br><br><br> |
| <br><br>2. Test Class BookReviewManager : summarizeByRating <br><br><br><br><br> | <br><br>ทดสอบการสรุปรีวิวตามคะแนน (rating) ของแต่ละหนังสือ <br><br><br><br><br> | <br><br>*   should summarize reviews by rating correctly <br>    <br><br><br><br> | <br><br>ช่วยให้มั่นใจว่า summarizeByRating() สามารถสรุปจำนวนรีวิวที่มีคะแนนต่าง ๆ ได้ถูกต้องตามที่คาดหวัง <br><br><br><br><br> |
| <br><br>3. Test Class BookReviewManager : sortByRating <br><br><br><br> | <br><br>ทดสอบการจัดเรียงหนังสือตามคะแนนเฉลี่ย (average rating) ของรีวิว <br><br><br><br><br> | <br><br>*   should sort books by average rating correctly <br>    <br><br><br><br> | <br><br>ทดสอบการจัดเรียงหนังสือตามคะแนนเฉลี่ยของรีวิวจากมากไปน้อย <br><br><br><br><br> |
| <br><br>4. Test Class BookReviewManager : searchBooks <br><br><br><br> | <br><br>ทดสอบการค้นหาหนังสือตามชื่อ (title) หรือผู้เขียน (author) <br><br><br><br><br> | <br><br>*   should search books by title or author correctly <br>    <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน searchBooks() ของ BookReviewManager ซึ่งมีหน้าที่ค้นหาหนังสือตามชื่อ (title) หรือผู้เขียน (author) ที่ตรงกับคำค้นที่ผู้ใช้ระบุ <br><br><br><br><br> |
| <br><br>5. Test Class BookReviewManager : loadBooksFromFile <br><br><br><br> | <br><br>ทดสอบกรณีที่ไฟล์ไม่สามารถโหลดได้ <br><br><br><br><br> | <br><br>*   should not load books if file does not exist <br>    <br><br>*   should load books from file correctly <br>    <br><br><br><br> | <br><br>*   ทดสอบการทำงานของฟังก์ชัน loadBooksFromFile() ในกรณีที่พยายามโหลดไฟล์ที่ไม่มีอยู่จริง <br>    <br><br>*   ทดสอบการทำงานของฟังก์ชัน loadBooksFromFile() ว่าสามารถโหลดข้อมูลจากไฟล์ที่มีข้อมูลหนังสืออยู่ได้อย่างถูกต้องหรือไม่ <br>    <br><br><br><br><br> |
| <br><br>6. Test Class BookReviewManager : getAllBooks <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน getAllBooks() เพื่อดึงหนังสือทั้งหมดจาก bookManager <br><br><br><br><br> | <br><br>*   should get all books correctly <br>    <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน getAllBooks() ของ BookReviewManager ว่าสามารถดึงข้อมูลหนังสือทั้งหมดที่ถูกจัดเก็บไว้ใน bookManager ได้อย่างถูกต้องหรือไม่ <br><br><br><br><br> |
| <br><br>7. Test Class BookReviewManager : saveBooksTofile <br><br><br><br> | <br><br>ทดสอบการบันทึกข้อมูลของหนังสือไปยังไฟล์ <br><br><br><br><br> | <br><br>*   should save books to file correctly <br>    <br><br><br><br> | <br><br>ทดสอบฟังก์ชัน saveBooksToFile() ของ BookReviewManager ว่าสามารถบันทึกข้อมูลหนังสือไปยังไฟล์ได้ถูกต้องหรือไม่ <br><br><br><br><br> |
| <br><br>8. Test Class BookReviewManager : addBooks <br><br><br><br> | <br><br>ทดสอบกรณีที่เพิ่มหนังสือที่ไม่มีรีวิวเข้ามาในระบบ <br><br><br><br><br> | <br><br>*   should handle book with no reviews correctly <br>    <br><br><br><br><br> | <br><br>ทดสอบกรณีที่มีหนังสือที่ยังไม่ได้รับการรีวิวในระบบ และตรวจสอบว่าระบบสามารถจัดการกับหนังสือที่ไม่มีรีวิวได้ถูกต้องหรือไม่ <br><br><br><br><br> |
| <br><br>9. Test Class BookModel : addReview and getReviews <br><br><br><br> | <br><br>ทดสอบการเพิ่มรีวิวใหม่ไปยังหนังสือที่มีอยู่แล้ว <br><br><br><br><br> | <br><br>*   should add review to existing book <br>    <br><br><br><br><br> | <br><br>ทดสอบการเพิ่มรีวิวใหม่ให้กับหนังสือที่มีอยู่ในระบบแล้ว และตรวจสอบว่ารีวิวถูกเพิ่มเข้าไปอย่างถูกต้อง <br><br><br><br><br> |
| <br><br>10. Test Class BookModel : getAverageRating <br><br><br><br> | <br><br>ทดสอบการคำนวณคะแนนเฉลี่ยของรีวิวในหนังสือ <br><br><br><br><br> | <br><br>*   should calculate average rating correctly <br>    <br><br><br><br><br> | <br><br>ทดสอบการคำนวณคะแนนเฉลี่ย (average rating) ของรีวิวที่ถูกเพิ่มให้กับหนังสือแต่ละเล่ม ว่าถูกคำนวณอย่างถูกต้องหรือไม่ <br><br><br><br><br> |

![image.png](/.attachments/image-a7b064b0-8b68-400b-9797-d96b11cad8ac.png)
**1.Test should open BSK Readind and check title**
![image.png](/.attachments/image-ec60c63b-716a-462c-acb1-3d0dedd603ce.png)
**2.Test should open sidebar menu when menu button is clicked**
![image.png](/.attachments/image-af17ccb1-9b49-4c9c-8681-f37f747505ce.png)
**3.Test should submit form and display “Top hits This Month”**
![image.png](/.attachments/image-034a1cd5-e6e7-4add-a12f-7e7847ad90ea.png)
**4.Test should display correct header text**
![image.png](/.attachments/image-2875d739-c15a-45f1-8dc6-4614c40366e1.png)
**5.Test should navigate to signup page when “Sign up here” link is clicked**
![image.png](/.attachments/image-ac88b972-ef42-4acb-9ef6-98988487a285.png)

**Test coverage and code** 
===============================

*   Report ผลการ test ที่ได้ 
    

![==image_0==.png](/.attachments/==image_0==-2045fcf2-8691-4ec4-875e-38f006011046.png) ![==image_1==.png](/.attachments/==image_1==-a8f8fc30-bd33-4062-9157-440dfc75739a.png) ![==image_2==.png](/.attachments/==image_2==-2c575ecf-25a5-4ed3-a246-6109b4ef306d.png) ![==image_3==.png](/.attachments/==image_3==-7269684a-dcca-4292-8785-6973fac4fc28.png) ![==image_4==.png](/.attachments/==image_4==-f1c36387-ea7b-42ed-a7c7-06150bf5dc32.png) ![==image_5==.png](/.attachments/==image_5==-eada8eff-63c7-403d-b776-8eab8f23d8f0.png)  

สรุป : จากการทดสอบ Test Coverage ทั้ง 2 ไฟล์ คือ bookModel.test.js และ bookReviewManager.test.js มีผล Test Coverage ของทั้ง 2 ไฟล์มากกว่า 80% สำหรับ Statements Coverage โดยใช้ Test cases ทั้งหมด 11 Cases ผ่าน 9 tests และไม่ผ่าน 2 tests

**Example of test code with comments** 

1.  Test Class BookReviewManager : getBookById 
    

![==image_0==.png](/.attachments/==image_0==-1cfcc3f3-1390-4dfe-8937-92bff4b1a31f.png)  

2.  Test Class BookReviewManager : summarizeByRating 
    

![==image_1==.png](/.attachments/==image_1==-d8e27ef0-e920-4d25-b7da-98f1de702024.png)  

3.  Test Class BookReviewManager : sortByRating 
    

![==image_2==.png](/.attachments/==image_2==-4c869fa6-f6e9-421c-ad23-e9315f84a47d.png)  

4.  Test Class BookReviewManager : searchBooks 
    

![==image_3==.png](/.attachments/==image_3==-07fd1911-ec1b-486b-b4c7-f1ae80db8bb2.png)  

5.  Test Class BookReviewManager : loadBooksFromFile 
    

![==image_4==.png](/.attachments/==image_4==-cade5fda-132c-4eda-b3be-18bda5b9b4a7.png)  

6.  Test Class BookReviewManager : getAllBooks 
    

![==image_5==.png](/.attachments/==image_5==-d3ec681d-f265-4642-b036-c8aa7f275155.png)  

7.  Test Class BookReviewManager : saveBooksTofile 
    

![==image_6==.png](/.attachments/==image_6==-5cc1756d-e613-4614-8da7-627a1beb2ef5.png)  

8.  Test Class BookReviewManager : addBooks 
    

![==image_7==.png](/.attachments/==image_7==-1d0d339b-0b24-4368-b966-e64757c35671.png)  

9.  Test Class BookModel : addReview and getReviews 
    

![==image_8==.png](/.attachments/==image_8==-0b47d2cf-f8ed-4b65-9072-fba54ae069f5.png)  

10.  Test Class BookModel : getAverageRating 
    

![==image_9==.png](/.attachments/==image_9==-6a026f87-c194-467d-a6ab-397545641697.png) 

       
**Static(phase 3)**
===============================

![==image_0==.png](/.attachments/==image_0==-eac8a1ff-b434-4069-8976-d5bcfc4c4dda.png) 

สรุป : จำนวนบรรทัดทั้งหมด 70 บรรทัด และมีจำนวนลรรทัดโดยเฉลี่ย 35 บรรทัด และมีค่าบำรุงรักษาเฉลี่ยเท่ากับ 83.53

![==image_1==.png](/.attachments/==image_1==-6816087b-97c4-4097-8ffa-cb8695223fdc.png)

สรุป : index.js มีค่าการบำรุงรักษาอยู่ที่  94.52 และ util.js มีค่าการบำรุงรักษาอยู่ที่ 72.55 และมีจำนวนบรรทัดในการเขียนจะเห็นได้ว่าไฟล์ index.js มีจำนวนบรรทัดในการเขียนโค้ด 55 บรรทัด และ util.js มีการเขียน 15 บรรทัด

![==image_2==.png](/.attachments/==image_2==-0b360eea-67c8-4eec-ada9-7bffe06c6539.png) 

สรุป : ข้อผิดพลาดโดยประมาณในการใช้งาน จะเห็นได้ว่า index.js  มีข้อผิดพลาดโดยประมาณในการใช้งาน 0.59 และ util.js มีข้อผิดพลาดโดยประมาณในการใช้งาน 0.07 และจากการตรวจสอบ code ว่ามีโอกาส ความผิดพลาดแค่ไหนโดยไม่ต้อง run web จะเห็นได้ว่า index.js มีข้อผิดพลาดโดยประมาณในการใช้งาน 12 และ util.js มีข้อผิดพลาดโดยประมาณในการใช้งานอยู่ 7

![==image_3==.png](/.attachments/==image_3==-9077cb08-df57-4d25-9239-f9f9e1185ed0.png) 

สรุป :
- Complexity : ไฟล์ util.js มีความซับซ้อนมากกว่า index.js
- SLOC (Source lines of code) : ไฟล์ index.js มีจำนวนบรรทัดโค้ด 55 บรรทัดและ util.js มีจำนวนบรรทัดโค้ด 15 บรรทัด
- est errors : ข้อผิดพลาดโดยประมาณในการใช้งาน  ไฟล์ index.js 0.59 , ไฟล์ util.js 0.07
- lint errors : ตรวจสอบว่า code มีโอกาสความผิดพลาดแค่ไหน ไฟล์ util.js 7 , ไฟล์ index.js 12

| **File name**<br> | **Maintainability**<br> | **Lines of code**<br> | **Difficulty**<br> | **Estimated Errors**<br> |
| --- | --- | --- | --- | --- |
| index.js<br> | 94.52<br> | 55<br> | 8.65<br> | 0.59<br> |
| util.js<br> | 72.55<br> | 15<br> | 4.79<br> | 0.07<br> |

![==image_4==.png](/.attachments/==image_4==-73de118b-fcbb-4b29-b1e9-eb184dfc4404.png) 

สรุป : util.js สามารถบำรุงรักษาได้ง่ายเนื่องจากมีค่าบำรุงรักษา 72.55 มีจำนวนบรรทัด 15 บรรทัด มีค่าความยากอยู่ที่ 4.79 และมีข้อผิดพลาดโดยประมาณอยู่ที่ 0.07

![==image_5==.png](/.attachments/==image_5==-0bba4412-a7cd-4016-93d1-2108fe545263.png)

สรุป : index.js สามารถบำรุงรักษาได้ง่ายเนื่องจากมีค่าบำรุงรักษา 94.52 มีจำนวนบรรทัด 55 บรรทัด มีค่าความยากอยู่ที่ 8.65 และมีข้อผิดพลาดโดยประมาณอยู่ที่ 0.59

**Dynamic(phase 3)**
===============================

![==image_6==.png](/.attachments/==image_6==-6679bc67-f04d-4385-8175-7877aa477672.png)

สรุป : แสดงให้เห็นว่าต้องใช้เวลานานแค่ไหน สำหรับการรันเว็บในแต่ละหน้าตั้งแต่เริ่มใช้งาน เราได้มีการบันทึกเป็นตัวอย่างในการใช้งาน และผลที่ได้ใช้เวลา
- experience : 1,934 ms
- system : 1,070 ms
- rendering : 316 ms
- painting : 232 ms
- scripting : 211 ms
- loading : 25 ms

![==image_7==.png](/.attachments/==image_7==-5fb8ea06-02d1-4ece-b964-9bbfe677c73d.png)
ใส่ console.time(“…”) เพื่อเริ่มจับเวลา และ console.timeEnd(“…”) เพื่อปิดการจับเวลา

**Dynamic (Phase 4)**
![image.png](/.attachments/image-18a8188d-916e-46f4-bb07-6f8bd1826d7f.png)
**สรุป** **:** **แสดงให้เห็นว่าต้องใช้เวลานานแค่ไหน สำหรับการรันเว็บในแต่ละหน้าตั้งแต่เริ่มใช้งาน เราได้มีการบันทึกเป็นตัวอย่างในการใช้งาน และผลที่ได้ใช้เวลา**
-       **system : 6,620 ms**
-       **scripting : 5,284 ms**
-       **rendering : 2,718 ms**
-       **painting : 2,203 ms**
-       **loading : 143 ms**
![image.png](/.attachments/image-04b9b767-750c-453f-920b-823043d19a10.png)
**ใส่** **console.time(“…”)** **เพื่อเริ่มจับเวลา และ** **console.timeEnd(“…”)** **เพื่อปิดการจับเวลา**

**อธิบายการทำ** **CI/CD** **ที่ใช้ในการทำ** **Product**
**CI: Continuous Integration**
![image.png](/.attachments/image-92b8ba01-5cac-46c0-818c-e89d8c8c8805.png)
**1.** **โค้ดถูกดึงเข้ามาจาก** **Version Control System (VCS)** **เช่น** **Git**
**ทุกครั้งที่มีการ** **commit** **หรือ** **push** **โค้ดไปที่** **repository** **ระบบ** **CI** **จะเริ่มทำงานโดยอัตโนมัติ**

**เครื่องมือ** **CI** **จะตรวจสอบว่าโค้ดใน** **repository** **มีการเปลี่ยนแปลงหรือไม่**

**trigger:**
**- main #** **ทุกครั้งที่มีการ** **push** **ไปที่** **branch 'main'**

**2.** **การ** **Build** **โค้ดจะทำงานอัตโนมัติ**
**ระบบจะทำการ** **build** **โค้ด เพื่อให้แน่ใจว่าโค้ดทั้งหมดสามารถนำมารวมกันได้สำเร็จ และไม่เกิดปัญหาขึ้นในระหว่างกระบวนการ**

**การ** **build** **นี้อาจรวมถึงการติดตั้ง** **dependencies,** **การคอมไพล์ไฟล์ หรือกระบวนการอื่นๆ ที่เกี่ยวข้อง**
**- script: |**
        **npm install**
      **displayName: 'npm install, build and test'**

**3.** **การ** **Run Tests (Unit Tests, Integration Tests)**
**หลังจาก** **build** **โค้ดเสร็จแล้ว ระบบจะรันการทดสอบต่างๆ เช่น** **unit tests** **เพื่อทดสอบฟังก์ชันต่างๆ หรือ** **integration tests** **เพื่อทดสอบการทำงานร่วมกันของหลายๆ ส่วนในแอปพลิเคชัน**

**การทดสอบนี้จะช่วยให้แน่ใจว่าโค้ดที่เราเพิ่มหรือเปลี่ยนแปลงไปไม่ทำให้ระบบเกิดข้อผิดพลาดหรือทำงานผิดปกติ**

**- script: |**
        **npx jest test/book.test.js test/review.test.js --coverage**
      **displayName: 'npm install, build and test'**

**4.** **การตรวจสอบคุณภาพของโค้ด (****Code Quality Analysis)**
**ในขั้นตอนนี้ ระบบจะทำการตรวจสอบคุณภาพของโค้ด เช่น การตรวจสอบ** **ESLint** **เพื่อหาข้อผิดพลาดในการเขียนโค้ด หรือใช้** **Prettier** **เพื่อจัดระเบียบรูปแบบโค้ด**
**- script: |**
        **npm run lint --if-present**
      **displayName: 'npm install, build and test'**

**5.** **ผลการทดสอบจะถูกส่งออกมาให้โปรแกรมเมอร์ทราบทันที**
**เมื่อกระบวนการทั้งหมดเสร็จสิ้น ระบบจะส่งผลลัพธ์ของการทดสอบกลับไปให้กับนักพัฒนา เช่น การแสดงผลที่** **Pass** **หรือ** **Fail**
**CD (Continuous Deployment)**
     **การทำงาน** **CD** **จะมุ่งเน้นไปที่การ** **deploy** **ผลิตภัณฑ์ไปยังสภาพแวดล้อมต่าง ๆ โดยมีการตรวจสอบคุณภาพและทดสอบอย่างละเอียดก่อนการเผยแพร่สู่ผู้ใช้งานจริง กระบวนการนี้ช่วยให้มั่นใจได้ว่าแอปพลิเคชันสามารถปล่อยได้โดยไม่มีปัญหาส่งผลกระทบต่อผู้ใช้ และสามารถกลับไปยังเวอร์ชันก่อนหน้าได้หากเกิดปัญหาในกระบวนการ** **deploy** 
     **เนื่องจากปัญหา** **Azure subscription** **ทำให้ไม่มีสิทธิ์ในการใช้งานบริการบางอย่างจึงไม่สามารถ** **deploy web app** **ได้**

**หากมีข้อผิดพลาด ระบบจะส่งการแจ้งเตือนไปยังนักพัฒนา เพื่อให้พวกเขาทราบและสามารถแก้ไขได้อย่างรวดเร็ว**
      
**กระบวนการในการพัฒนา** **Software ของโครงการ**
===============================

### **กระบวนการทำงานใน** **Sprint ที่ 1**

### **เป้าหมาย:** ค้นหาหัวข้อหรือแนวคิดของเว็บไซต์ที่ต้องการพัฒนา

**งานที่ดำเนินการ:**
*   **Planning:** วางแผนแนวทางการพัฒนาเว็บไซต์
*   **Requirement Analysis:** วิเคราะห์และประเมิน **User Story** หรือ **Requirement** เพื่อทำความเข้าใจความต้องการของผู้ใช้
**ผลลัพธ์:**  
ได้แนวคิดและหัวข้อของเว็บไซต์ที่ต้องการพัฒนา พร้อมศึกษาตัวอย่างเว็บไซต์ต้นแบบ โดยเพิ่มฟังก์ชันที่น่าสนใจเพิ่มเติม อย่างไรก็ตาม ในระยะนี้ยังไม่มีการออกแบบ **UI/UX** และยังไม่ได้วิเคราะห์เชิงลึกเกี่ยวกับประสบการณ์การใช้งานของผู้ใช้

### **กระบวนการทำงานใน** **Sprint ที่ 2**

**เป้าหมาย:** ออกแบบและพัฒนา **UI Design** ของโครงงาน
**งานที่ดำเนินการ:**
*   **Design:** ออกแบบหน้าตาและโครงสร้างของเว็บไซต์
*   **Requirement Analysis:** นำ **User Story** หรือ **Requirement** ที่ได้จากการวิเคราะห์มาพัฒนาเป็นฟังก์ชันต่างๆ ของเว็บไซต์ พร้อมออกแบบ **UI Design** ให้เห็นภาพรวมขององค์ประกอบเว็บไซต์ได้ชัดเจนขึ้น นอกจากนี้ ยังมีการกำหนดลำดับการทำงานของปุ่มต่างๆ เพื่อให้ผู้ใช้สามารถใช้งานได้ง่ายและสะดวกมากขึ้น

**ผลลัพธ์:**  
โครงร่างของ **UI Design** เริ่มเป็นรูปเป็นร่าง ทำให้เห็นภาพรวมของเว็บไซต์ชัดเจนขึ้น อย่างไรก็ตาม ในขั้นตอนนี้ยังไม่มีการทดสอบจริง (Testing) ทำให้ยังไม่สามารถยืนยันได้ว่า **UI Design** ที่ออกแบบมาตรงกับความต้องการและประสบการณ์ของผู้ใช้จริงหรือไม่

**สิ่งที่มีการเปลี่ยนแปลงจาก** **Sprint ที่ 1**
- ใน **Sprint 1**, ทีมงานมุ่งเน้นไปที่การค้นหาแนวคิดเกี่ยวกับเว็บไซต์ที่ต้องการพัฒนา รวมถึงการศึกษาตัวอย่างเว็บไซต์ที่มีอยู่ เพื่อหาแนวทางที่เหมาะสม
- ใน **Sprint 2**, แนวคิดเหล่านั้นถูกนำมาต่อยอดเป็น **UI Design** ที่แสดงโครงสร้างหน้าตาเว็บไซต์ และกำหนดองค์ประกอบหลักของหน้าเว็บ

### **กระบวนการทำงานใน** **Sprint ที่ 3**

**เป้าหมาย:** เริ่มต้นการพัฒนาโค้ดและสร้างฟังก์ชันหลักของเว็บไซต์
**งานที่ดำเนินการ:**
- **Development:** เริ่มพัฒนาโค้ดโดยอ้างอิงจาก UI Design ที่ออกแบบไว้ใน Sprint 2
- **Feature Implementation:** นำ **User Story** หรือ **Requirement** ที่วิเคราะห์ไว้ มาพัฒนาเป็นฟังก์ชันหลักของเว็บไซต์ เช่น ระบบล็อกอิน ระบบบันทึกการอ่าน (Streak System) และการแสดงผล UI ตามที่ออกแบบไว้
- **Integration:** เชื่อมโยงโค้ดส่วนต่างๆ ให้ทำงานร่วมกันได้ เช่น การเชื่อมต่อ **Frontend และ Backend** หรือการเชื่อมต่อฐานข้อมูล

**ผลลัพธ์:**  
โค้ดเริ่มเป็นรูปเป็นร่าง และมีฟังก์ชันหลักบางส่วนทำงานได้แล้ว อย่างไรก็ตาม ในขั้นตอนนี้ยังไม่มีการ **Testing** อย่างสมบูรณ์ ทำให้ยังไม่สามารถยืนยันได้ว่าโค้ดที่พัฒนามามีประสิทธิภาพสูงสุด หรือไม่มีบั๊กที่อาจเกิดขึ้นระหว่างการใช้งาน
**สิ่งที่มีการเปลี่ยนแปลงจาก** **Sprint ที่ 2**
*   ใน **Sprint 2**, ทีมงานมุ่งเน้นไปที่ **การออกแบบ UI Design** และการกำหนดโครงสร้างของเว็บไซต์ โดยอ้างอิงจาก **User Story** หรือ **Requirement** ที่ได้วิเคราะห์ไว้ เพื่อให้เห็นภาพรวมขององค์ประกอบต่างๆ อย่างชัดเจน ก่อนเริ่มต้นพัฒนาโค้ดจริง
*   ใน **Sprint 3**, แนวคิดและ UI Design ที่ออกแบบไว้ ถูกนำมาพัฒนาเป็น **โค้ดจริง** โดยเริ่มต้นสร้างฟังก์ชันหลักของเว็บไซต์ รวมถึงการเชื่อมต่อ **Frontend และ Backend** เพื่อให้สามารถใช้งานได้จริง


      

**อธิบายการทำงานโดยใช้ Process, Methods และ Tools (Phase 3)**
=============================================================

- **Process**
  - วิเคราะห์และศึกษาโค้ดต้นแบบจากเว็บไซต์ต้นแบบ
  - ศึกษาโครงสร้างโค้ดของระบบ Tracking Streak ที่มีอยู่
  - เชื่อมต่อ API เพื่อดึงข้อมูลหนังสือ แสดงผลได้อย่างลื่นไหล
  - **Unit Testing**: ตรวจสอบฟังก์ชันหลักว่าทำงานได้สมบูรณ์
  - **User Testing**: ให้ผู้ใช้ทดลองใช้งาน และเก็บ Feedback เพื่อปรับปรุง
  - การจัดทำ Report และการระบุข้อมูลใน Report
  - การประชุม Retrospective Phase 3
- **Methods**
  - ค้นคว้าและศึกษาโค้ดจากแหล่งข้อมูลที่เกี่ยวข้อง เช่น **GitHub, Stack Overflow**
  - ใช้หลักการ **Test-Driven Development (TDD)** เพื่อเขียนโค้ดที่มีคุณภาพ
  - ใช้เครื่องมือสำหรับ **Unit Testing และ Integration Testing** เพื่อให้แน่ใจว่าโค้ดทำงานได้อย่างถูกต้อง
  - จัดทำ Report โดยใช้โปรแกรมเอกสารที่สามารถทำงานร่วมกันได้
  - ประชุม Retrospective โดยการนั่งคุยกันและอัดคลิปวิดีโอ
- **Tools**
  - วิเคราะห์และศึกษาโค้ดต้นแบบจากเว็บไซต์ที่กลุ่มของเราใช้ออกแบบ คือ Figma.com
  - Coding โดยใช้ Visual Studio Code
  - ใช้ Cygwin ในการรันคำสั่งเพื่อจัดการกับ Test และเพื่อดู Test Coverage
  - จัดทำ Report โดยใช้โปรแกรมเอกสารที่สามารถทำงานร่วมกันได้คือ Microsoft Word โดยแชร์ผ่าน OneDrive
  - ประชุม Retrospective โดยใช้กล้องมือถืออัดคลิป โดยเผยแพร่วิดีโอการประชุมผ่านทาง Youtube
**กระบวนการทำงานใน** **Sprint** **ที่** **4**  
**เป้าหมาย:** เก็บงานที่เหลือทั้งหมดให้เสร็จสมบูรณ์ พร้อม Debug และ Testing เพื่อเตรียมส่งมอบผลงาน  
**งานที่ดำเนินการ:**  
         • **Code Completion:** ดำเนินการพัฒนาโค้ดส่วนที่ยังไม่เสร็จจาก Sprint 3 ให้ครบถ้วน เช่น ฟังก์ชันเสริม ระบบย่อย หรือส่วนของ UI ที่ยังค้างอยู่  
          • **Debugging:** ตรวจสอบข้อผิดพลาดที่เกิดขึ้นในโค้ดทั้งระบบ โดยใช้การทดสอบฟังก์ชัน (Functional Testing) และการทดสอบการทำงานร่วมกัน (Integration Testing) เพื่อแก้ไขบั๊กที่พบ  
          • **UI Testing and Improvement:** ทดสอบการแสดงผลของ UI บนอุปกรณ์และเบราว์เซอร์ต่างๆ เพื่อให้แน่ใจว่า UI มีความสมบูรณ์ ใช้งานได้จริง และสอดคล้องกับดีไซน์ที่วางไว้  
          • **Final Integration:** ตรวจสอบการเชื่อมต่อทั้งหมดระหว่าง Frontend, Backend และ Database ว่าสามารถทำงานร่วมกันได้อย่างไม่มีปัญหา  
ผลลัพธ์:  
โค้ดทั้งหมดถูกพัฒนาเสร็จสมบูรณ์ และผ่านกระบวนการ Debug และ Testing ทำให้ระบบมีความเสถียร สามารถทำงานได้อย่างมีประสิทธิภาพ พร้อมสำหรับการส่งมอบและเผยแพร่ใช้งานจริง
**สิ่งที่มีการเปลี่ยนแปลงจาก** **Sprint** **ที่** **3**  
          • ใน Sprint 3, ทีมงานมุ่งเน้นไปที่การเริ่มพัฒนาโค้ดโดยอ้างอิงจาก UI Design และ Requirement ที่วิเคราะห์ไว้ โดยสร้างฟังก์ชันหลักต่างๆ และเชื่อมต่อส่วนประกอบของระบบให้ทำงานร่วมกันได้ แต่ยังไม่มีการทำ Testing อย่างเต็มรูปแบบ  
          • ใน Sprint 4, ทีมงานดำเนินการเก็บรายละเอียดทุกส่วนให้สมบูรณ์ ทำการ Debug เพื่อแก้ไขข้อผิดพลาด และทำ Testing เพื่อยืนยันว่าระบบทำงานได้อย่างถูกต้อง มีความเสถียร และพร้อมสำหรับการส่งมอบในขั้นสุดท้าย

**อธิบายการทำงานโดยใช้ Process, Methods และ Tools (Phase 4)**
=============================================================

·      Process
-       การจัดทำ Report และการระบุข้อมูลใน Report
-       การประชุม Retrospective Phase 3
-       ตรวจสอบ code และ debug โค้ดทั้งหมด
-       ทำหน้า moodPage เพิ่มโดยมีฟังก์ชันเลือกอารมณ์ และเรียงลำดับจากคะแนนหนังสือได้
-       สามารถลบ หรือแก้ไขรีวิวของผู้ใช้งานได้
-       ทำการทดสอบ UI (UI Testing) เพื่อให้แน่ใจว่าฟังก์ชันการทำงานและการแสดงผลของหน้าจอถูกต้องตามที่ออกแบบ
·      Methods
-       จัดทำ Report โดยใช้โปรแกรมเอกสารที่สามารถทำงานร่วมกันได้
-       ประชุม Retrospective โดยการนั่งคุยกันและอัดคลิปวิดีโอ
-       ดำเนินการทดสอบ UI ผ่านการใช้งานจริง โดยกำหนด Test Cases ล่วงหน้า และบันทึกผลการทดสอบไว้
-        
·      Tools
-       ประชุม Retrospective โดยใช้กล้องมือถืออัดคลิป โดยเผยแพร่วิดีโอการประชุมผ่านทาง Youtube
-       ใช้ Cygwin ในการรันคำสั่งเพื่อจัดการกับ Test และเพื่อดู UI Test
-       Coding โดยใช้ Visual Studio Code
-       จัดทำ Report โดยใช้โปรแกรมเอกสารที่สามารถทำงานร่วมกันได้คือ Microsoft Word โดยแชร์ผ่าน OneDrive
-       วิเคราะห์และศึกษาโค้ดต้นแบบจากเว็บไซต์ที่กลุ่มของเราใช้ออกแบบ คือ Figma.com

      

**สรุปประชุม** **Retrospective** **และ Link to Retrospective YouTube video (Phase 3)**
======================================================================================

[https://www.youtube.com/watch?v=JMcdOQmkKGc](https://www.youtube.com/watch?v=JMcdOQmkKGc)
- มีการเขียน code โดยเสร็จสมบูรณ์ ซึ่งหน้าเว็บสามารถนำมาใช้งานได้จริง
- ได้เจอปัญหาโดยพวก UI และ Pop up ที่ทำมีความใกล้เคียงแต่อาจจะไม่ได้เป็นไปตาม design ที่ออกแบบไว้ทั้งหมด
- Function การทำงานอาจจะยังไม่ได้สมบูรณ์แบบ 100%
- มีการ test code ได้เกิน 80%
- แนวทางการแก้ไขของphaseหน้า จะแก้ไขฟังก์ชันให้ทำงานเสถียรกว่าเดิม ปรับ UI และ pop up ให้มีความใกล้เคียงกับ design ที่แบบไว้ เพิ่มการสื่อสารให้มากกว่านี้ทั้งใน dev azure ด้วย

**สรุปประชุม** **Retrospective** **และ** **Link to Retrospective YouTube video (Phase 4)**
==========================================================================================