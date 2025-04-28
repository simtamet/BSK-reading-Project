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

    เว็บรีวิวหนังสือเลือกใช้ Sorted Array เป็นโครงสร้างข้อมูลหลัก เนื่องจากมีความเหมาะสมกับลักษณะการใช้งานที่ต้องการ จัดเรียงหนังสือตามคะแนน (rating) ในแต่ละหมวดหมู่อารมณ์ โดยสามารถเรียงได้ทั้งจากคะแนนสูงไปต่ำ (Descending) และจากคะแนนต่ำไปสูง (Ascending)
    Sorted Array เป็นอาเรย์ที่มีการจัดเรียงข้อมูลตามลำดับที่กำหนดอย่างมีความสัมพันธ์ เช่น จากมากไปน้อย หรือจากน้อยไปมาก ซึ่งทำให้สามารถแสดงผลลำดับหนังสือได้อย่างรวดเร็วและแม่นยำ
    ด้วยเหตุนี้ จึงเลือกใช้ Sorted Array เพื่อรองรับประสบการณ์ผู้ใช้งานที่ราบรื่นและรวดเร็วในการเรียกดูและจัดเรียงหนังสือ

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

- moodPage.html

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
**Implementation**
**Testcases description**
| **Test Suite**<br> | **Describe**<br> | **Test Unit**<br> | **Describe**<br> |
| --- | --- | --- | --- |
| Test Review Class<br><br><br> | ทดสอบสำหรับ Review Class ที่ใช้ในการบันทึกและโหลดข้อมูลรีวิวจาก localStorage โดยแบ่งออกเป็นหลายกรณีทดสอบที่ครอบคลุมฟังก์ชันการทำงานต่าง ๆ ของ Review<br> | should save a review to localStorage<br> | ทดสอบว่า Review สามารถบันทึกรีวิวลงใน localStorage ได้ถูกต้องหรือไม่<br> |
| <br><br> | <br><br> | should load reviews from localStorage and return them<br><br><br> | ทดสอบว่า Review สามารถโหลดรีวิวจาก localStorage ได้ถูกต้อง<br> |
| <br><br> | <br><br> | should initialize localStorage with an empty array if no reviews exist<br> | ทดสอบกรณีที่ localStorage ไม่มีข้อมูลรีวิวเลย<br> |
| <br><br> | <br><br> | should load multiple reviews from localStorage<br> | ทดสอบว่า Review สามารถโหลดหลายรีวิวจาก localStorage ได้ถูกต้อง<br> |
| <br><br> | <br><br> | should handle saving and loading when localStorage is empty<br> | ทดสอบการโหลดรีวิวจาก localStorage เมื่อ localStorage ถูกเคลียร์<br> |
| <br><br> | <br><br> | should handle invalid data in localStorage gracefully<br> | ทดสอบว่า Review สามารถจัดการกับข้อมูลที่ไม่ถูกต้องใน localStorage ได้หรือไม่ (เช่น ข้อมูลที่ไม่ใช่ JSON ที่ถูกต้อง)<br> |
| <br><br> | <br><br> | should handle corrupted data in localStorage gracefully<br><br><br> | ทดสอบการจัดการข้อมูลที่เสียหายใน localStorage<br> |
| <br><br> | <br><br> | should allow saving multiple reviews at once<br> | ทดสอบการบันทึกรีวิวหลายรายการในครั้งเดียว<br> |
| <br><br> | <br><br> | should update reviews correctly in localStorage<br> |  ทดสอบว่า Review สามารถอัปเดตข้อมูลรีวิวใน localStorage ได้หรือไม่<br> |
| <br><br> | <br><br> | should not allow saving undefined or null reviews<br> | ทดสอบว่า Review จะไม่บันทึกข้อมูลรีวิวที่ไม่สมบูรณ์ (เช่น undefined หรือ null)<br> |
| Test Book Class<br> | ทดสอบการทำงานต่าง ๆ ของระบบการจัดการหนังสือ<br> | should add books correctly<br> | ทดสอบว่าเมื่อเพิ่มหนังสือหลาย ๆ เล่มโดยใช้ addBook แล้ว จำนวนของหนังสือใน bookManager.books จะถูกต้องตามที่คาดหวัง และเนื้อหาของหนังสือที่เพิ่มเข้ามาจะถูกต้อง<br> |
| <br><br> | <br><br> | should save books to file correctly<br> | ทดสอบว่าเมื่อใช้ saveBooksToFile จะทำการบันทึกข้อมูลหนังสือลงในไฟล์ได้ถูกต้อง โดยตรวจสอบว่า fs.writeFileSync ถูกเรียกและได้รับข้อมูลที่ถูกต้อง (คือ รายการหนังสือที่บันทึกใน bookManager.books)<br> |
| <br><br> | <br><br> | should sort books by rating correctly in descending order<br> | ทดสอบว่าเมื่อเรียงลำดับหนังสือโดยใช้ sortBooksByRating ในลำดับจากคะแนนสูงสุดไปหาต่ำสุด (desc) จะได้ผลลัพธ์ที่ถูกต้องตามคาด โดยเปรียบเทียบกับข้อมูลที่จัดเรียงด้วยมือ<br> |
| <br><br> | <br><br> | should sort books by rating correctly in ascending order<br> | ทดสอบว่าเมื่อเรียงลำดับหนังสือโดยใช้ sortBooksByRating ในลำดับจากคะแนนต่ำสุดไปหาสูงสุด (asc) จะได้ผลลัพธ์ที่ถูกต้องตามคาด โดยเปรียบเทียบกับข้อมูลที่จัดเรียงด้วยมือ<br> |
| <br><br> | <br><br> | should sort books by rating correctly when ratings are the same<br><br><br> | ทดสอบการจัดเรียงหนังสือที่มีคะแนนเท่ากันทั้งสามเล่ม ว่าการเรียงลำดับจะทำงานได้ถูกต้องทั้งในลำดับจากสูงไปต่ำ (desc) และจากต่ำไปสูง (asc)<br> |
| <br><br> | <br><br> | should handle sorting when there are no books<br> | ทดสอบกรณีที่ไม่มีหนังสือในระบบ (array ว่าง) ว่า sortBooksByRating จะคืนค่าเป็นอาร์เรย์ว่าง ๆ ตามคาด<br> |
| <br><br> | <br><br> | should sort books correctly when ratings are a mix of integers and decimals<br> | ทดสอบกรณีที่คะแนนของหนังสือมีทั้งแบบจำนวนเต็ม (integer) และทศนิยม (decimal) ว่า sortBooksByRating จะจัดเรียงได้ถูกต้องตามลำดับ<br> |
| <br><br> | <br><br> | should sort books correctly when ratings are mixed types (string and number)<br> | ทดสอบกรณีที่คะแนนของหนังสือมีทั้งแบบตัวเลขและสตริง (string) ว่า sortBooksByRating จะจัดเรียงได้ถูกต้องตามลำดับจากคะแนนสูงสุดไปหาต่ำสุด หรือจากต่ำสุดไปหาสูงสุด<br> |
| <br><br> | <br><br> | should sort books correctly when ratings are negative<br> | ทดสอบกรณีที่คะแนนของหนังสือเป็นค่าลบ (negative) ว่า sortBooksByRating จะจัดเรียงได้ถูกต้องตามลำดับจากคะแนนมากไปหาน้อย หรือจากคะแนนน้อยไปหามาก<br> |
| <br><br> | <br><br> | should sort books correctly when ratings have multiple decimal points<br> | ทดสอบกรณีที่คะแนนของหนังสือมีทศนิยมหลายตำแหน่ง ว่า sortBooksByRating จะจัดเรียงได้ถูกต้องตามลำดับจากคะแนนที่มากไปหาน้อย หรือจากคะแนนที่น้อยไปหามาก<br> |


## **Test coverage and code**
<br>**Report ผลการ test ที่ได้**<br>

![==image_0==.png](/.attachments/==image_0==-708126ce-9e16-469e-a364-a4038070aad7.png) ** **![==image_1==.png](/.attachments/==image_1==-d00457ee-bae1-48cc-b744-5d2f050f3aae.png) **  ![==image_2==.png](/.attachments/==image_2==-39a00e7d-438b-4521-bd0a-1878d56e17eb.png)  ![==image_3==.png](/.attachments/==image_3==-e0f34f47-0530-4786-ad57-75ee4a763775.png) 

**สรุป : จากการทดสอบ** **Test Coverage ทั้ง 3 ไฟล์ คือ book.test.js , review.test.js และ app.ui.test.js มีผล Test Coverage ของทั้ง 3 ไฟล์มากกว่า 80% สำหรับ Statements Coverage โดยใช้ Test cases ทั้งหมด 19 test case**
**Review.test.js**
1.Test should save a review to localStorage

![==image_4==.png](/.attachments/==image_4==-839b6a93-f1da-46fd-b477-a8c17a9b8613.png)

2.Test should load reviews from localStorage and return them

![==image_5==.png](/.attachments/==image_5==-c7622ef0-d0e2-48ee-a17f-81e3637aab1e.png)

3.Test should initialize localStorage with an empty array if no reviews exist

![==image_6==.png](/.attachments/==image_6==-203ea1d4-a415-4b0a-9f6b-f6bb0462576e.png)

4.Test should load multiple reviews from localStorage

![==image_7==.png](/.attachments/==image_7==-7816b26b-e53b-4b45-b671-57d4c04977f1.png) 

5.Test should handle saving and loading when localStorage is empty

![==image_8==.png](/.attachments/==image_8==-4becdfc8-f0bc-43ca-a2c3-4487f7913129.png) 

6.Test should handle invalid data in localStorage gracefully

![==image_9==.png](/.attachments/==image_9==-b868bfd1-b12a-4d08-87b5-ee7428cfda8e.png)

7.Test should handle corrupted data in localStorage gracefully

![==image_10==.png](/.attachments/==image_10==-601e9119-28ea-40d6-b836-c2d67fbf550f.png) 

8.Test should allow saving multiple reviews at once

![==image_11==.png](/.attachments/==image_11==-69c1a94a-4c8a-4e33-9322-62eeaed689c0.png)

9.Test should update reviews correctly in localStorage

![==image_12==.png](/.attachments/==image_12==-4dfc2deb-d0fa-4db8-b354-323f6bcd2b4c.png)

10.Test should not allow saving undefined or null reviews

![==image_13==.png](/.attachments/==image_13==-1d6826a0-c91f-4315-92a0-3e5d04ee961b.png) 

**Book.test.js** <br>

1.Test should add books correctly

![==image_14==.png](/.attachments/==image_14==-703b3140-ede4-47f4-8d1a-d28f104a1610.png)

2.Test should save books to file correctly

![==image_15==.png](/.attachments/==image_15==-5030406a-fe4c-482e-a547-6975d39cc208.png)

3.Test should sort books by rating correctly in descending order

![==image_16==.png](/.attachments/==image_16==-61c5c6fa-f311-42cb-8c1f-e2546068b56f.png)

4.Test should sort books by rating correctly in ascending order

![==image_17==.png](/.attachments/==image_17==-c63b21cf-5097-4995-b35b-a13902fdcd0f.png)

5.Test should sort books by rating correctly when ratings are the same

![==image_18==.png](/.attachments/==image_18==-b78b052a-a874-4c4f-9b5a-3fb925db6300.png) 

6.Test should handle sorting when there are no books

![==image_19==.png](/.attachments/==image_19==-4e097b9c-2d26-492c-b0df-67b685de7f9f.png) 

7.Test should sort books correctly when ratings are a mix of integers and decimals

![==image_20==.png](/.attachments/==image_20==-13e377cb-9a3b-427c-b6bb-51a1db737d4a.png) 

8.Test should sort books correctly when ratings are mixed types (string and number)

![==image_21==.png](/.attachments/==image_21==-ac85ef61-9029-4f28-adb4-cd32e9baabb6.png) 

9.Test should sort books correctly when ratings are negative

![==image_22==.png](/.attachments/==image_22==-dc4e8387-cc51-4da3-9609-b9cc719c9caa.png) 

10.Test should sort books correctly when ratings have multiple decimal points

![==image_23==.png](/.attachments/==image_23==-df77c58d-4459-4175-8a9c-e776b9331105.png) 

11.Test should sort books correctly when ratings are negative

![==image_24==.png](/.attachments/==image_24==-b2107598-21b8-4658-8b6a-0f303ab782c0.png) 

12.Test should sort books correctly when ratings have multiple decimal points

![==image_25==.png](/.attachments/==image_25==-831343e5-17e9-4c66-a657-c198f3cf72e8.png) 

**UI Test**
| **Test Suite**<br> | **Describe**<br> | **Test Unit**<br> | **Describe**<br> |
| --- | --- | --- | --- |
| BSK Reading test<br><br><br> | การทดสอบที่ใช้ Jest ร่วมกับ Selenium WebDriver โดยมีการทดสอบหลายกรณี (tests) ที่ครอบคลุมการทำงานหลักของหน้าเว็บ "BSK Reading"<br> | should open BSK Readind and check title<br> | ตรวจสอบว่าเมื่อเปิดหน้าเว็บแล้ว ชื่อของหน้า (Title) จะต้องเป็น "BSK Reading"<br> |
| <br><br> | <br><br> | should open sidebar menu when menu button is clicked<br> | ตรวจสอบว่าเมื่อคลิกที่ปุ่มเมนู sidebar เมนูต้องเปิดขึ้นมา<br> |
| <br><br> | <br><br> | should submit form and display “Top hits This Month”<br><br><br> | ทดสอบการกรอกข้อมูลฟอร์มและตรวจสอบว่าหลังจากส่งฟอร์มแล้ว ระบบจะแสดงข้อความ "Top Hits This Month"<br> |
| <br><br> | <br><br> | should display correct header text<br> | ทดสอบว่าเมื่อเข้าไปที่หน้าเว็บแล้ว ข้อความใน header ต้องเป็น "BSK READING"<br> |
| <br><br> | <br><br> | should navigate to signup page when “Sign up here” link is clicked<br><br><br> | ทดสอบว่าเมื่อคลิกลิงก์ "Sign up here" จะพาไปที่หน้า /signup<br> |

![==image_26==.png](/.attachments/==image_26==-383af27c-8fa5-46fb-ad0c-dea595d1f3be.png) 

1.Test should open BSK Readind and check title

![==image_27==.png](/.attachments/==image_27==-9e33890e-0fb5-4d81-81d7-91cf89eedaaf.png) 

2.Test should open sidebar menu when menu button is clicked

![==image_28==.png](/.attachments/==image_28==-0409c968-fe5c-436e-8816-7c125794a55f.png)

3.Test should submit form and display “Top hits This Month”

![==image_29==.png](/.attachments/==image_29==-85765229-ff6b-43d5-9fa3-65c234f06f88.png) 

4.Test should display correct header text

![==image_30==.png](/.attachments/==image_30==-f053f804-aad8-42c5-a2e3-7651e4d05174.png) 

5.Test should navigate to signup page when “Sign up here” link is clicked

![==image_31==.png](/.attachments/==image_31==-124cb7c4-619f-4894-b85a-614ea6ffc225.png) 

       
## **Static(phase 3)**



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

## **Static (Phase 4)**

 ![==image_0==.png](/.attachments/==image_0==-1255cd42-ecf2-46e5-95b3-a1c23d84cb6d.png) 

สรุป : จำนวนบรรทัดทั้งหมด 70 บรรทัด และมีจำนวนลรรทัดโดยเฉลี่ย 35 บรรทัด และมีค่าบำรุงรักษาเฉลี่ยเท่ากับ 83.53

![==image_1==.png](/.attachments/==image_1==-10cbc38a-15b4-486e-914a-ac45ece88d05.png) 

สรุป : index.js มีค่าการบำรุงรักษาอยู่ที่  94.52 และ util.js มีค่าการบำรุงรักษาอยู่ที่ 72.55 และมีจำนวนบรรทัดในการเขียนจะเห็นได้ว่าไฟล์ index.js มีจำนวนบรรทัดในการเขียนโค้ด 55 บรรทัด และ util.js มีการเขียน 15 บรรทัด

 ![==image_2==.png](/.attachments/==image_2==-4125ecbc-0ad4-4380-bd04-c7e86b5a96dd.png) 

![==image_3==.png](/.attachments/==image_3==-9725deec-9e07-4c7c-bc0d-26335714fa00.png) 

สรุป : ข้อผิดพลาดโดยประมาณในการใช้งาน จะเห็นได้ว่า index.js  มีข้อผิดพลาดโดยประมาณในการใช้งาน 0.59 และ util.js มีข้อผิดพลาดโดยประมาณในการใช้งาน 0.07 และจากการตรวจสอบ code ว่ามีโอกาส ความผิดพลาดแค่ไหนโดยไม่ต้อง run web จะเห็นได้ว่า index.js มีข้อผิดพลาดโดยประมาณในการใช้งาน 12 และ util.js มีข้อผิดพลาดโดยประมาณในการใช้งานอยู่ 7

![==image_4==.png](/.attachments/==image_4==-30ccc6d8-d348-4a3c-870a-beaa0dae8756.png) 

สรุป :
      
- Complexity : ไฟล์ review.js มีความซับซ้อนมากที่สุดรองลงมาคือ  book.js และ index.js ที่มีค่า complexity เท่ากัน และ uti ตามลำดับ
- SLOC (Source lines of code) : ไฟล์ index.js มีจำนวนบรรทัดโค้ด 59 บรรทัด , util.js มีจำนวนบรรทัดโค้ด 15 บรรทัด , book.js มีจำนวนบรรทัดโค้ด 33 บรรทัด , review.js มีจำนวนบรรทัดโค้ด 51 บรรทัด
- est errors : ข้อผิดพลาดโดยประมาณในการใช้งาน  ไฟล์ index.js 0.64 , ไฟล์ util.js 0.07 ,ไฟล์ review.js 0.39 ,ไฟล์ book.js 0.21
- lint errors : ตรวจสอบว่า code มีโอกาสความผิดพลาดแค่ไหน ไฟล์ util.js 7 , ไฟล์ index.js 12 , ไฟล์ book.js  9 , ไฟล์ review.js 10

| File name<br> | Maintainability<br> | Lines of code<br> | Difficulty<br> | Estimated Errors<br> |
| --- | --- | --- | --- | --- |
| index.js<br> | 94.52<br> | 59<br> | 8.65<br> | 0.64<br> |
| util.js<br> | 72.55<br> | 15<br> | 4.79<br> | 0.07<br> |
| Book.js<br> | 82.40<br> | 33<br> | 12.37<br> | 0.21<br> |
| Review.js<br> | 73.53<br> | 51<br> | 23.40<br> | 0.39<br> |

Book.js

  ![==image_5==.png](/.attachments/==image_5==-8b6cdae4-99f1-4035-ad40-4a96214969d3.png)  ![==image_6==.png](/.attachments/==image_6==-341f0398-815f-4212-8508-4cb78f886723.png)  ![==image_7==.png](/.attachments/==image_7==-77c8c1de-7928-436c-a33d-906810462203.png) 

สรุป : book.js สามารถบำรุงรักษาได้ง่ายเนื่องจากมีค่าบำรุงรักษา 82.40 มีจำนวนบรรทัด 33 บรรทัด มีค่าความยากอยู่ที่ 12.37 และมีข้อผิดพลาดโดยประมาณอยู่ที่ 0.21
Review.js

![==image_8==.png](/.attachments/==image_8==-0eb20be6-7b84-4326-b548-162fac3f38a9.png)  ![==image_9==.png](/.attachments/==image_9==-086e09ef-c4ff-4e5a-8258-b84f829e4305.png)  ![==image_10==.png](/.attachments/==image_10==-96fa4649-20b8-4123-a337-d3dae013b1b8.png) 

สรุป : review.js สามารถบำรุงรักษาได้ง่ายเนื่องจากมีค่าบำรุงรักษา 73.53 มีจำนวนบรรทัด 51 บรรทัด มีค่าความยากอยู่ที่ 23.40 และมีข้อผิดพลาดโดยประมาณอยู่ที่ 0.39
Index.js

        ![==image_11==.png](/.attachments/==image_11==-dacdf260-c883-4d40-ab53-71604c36f736.png)  ![==image_12==.png](/.attachments/==image_12==-92269c14-a80a-4707-bff4-6f7c100d3fec.png)   ![==image_13==.png](/.attachments/==image_13==-8692c6d4-4244-4e60-bfb0-0414860364d4.png)  ![==image_14==.png](/.attachments/==image_14==-c0d85788-9784-408d-9579-dec9c86e4975.png) 

สรุป : index.js สามารถบำรุงรักษาได้ง่ายเนื่องจากมีค่าบำรุงรักษา 94.52 มีจำนวนบรรทัด 59 บรรทัด มีค่าความยากอยู่ที่ 8.65 และมีข้อผิดพลาดโดยประมาณอยู่ที่ 0.64

Util.js

  ![==image_15==.png](/.attachments/==image_15==-bb717248-630d-4cf4-b236-c76ff994893b.png)  ![==image_16==.png](/.attachments/==image_16==-b07864b3-c123-4dbb-8918-1c4f45bd1966.png)  ![==image_17==.png](/.attachments/==image_17==-5ac709fb-dd8c-46b6-9d6d-a8e061eee1da.png) 

สรุป : util.js สามารถบำรุงรักษาได้ง่ายเนื่องจากมีค่าบำรุงรักษา 72.55 มีจำนวนบรรทัด 15 บรรทัด มีค่าความยากอยู่ที่ 4.79 และมีข้อผิดพลาดโดยประมาณอยู่ที่ 0.07

## **Dynamic (Phase 4)**

![image.png](/.attachments/image-18a8188d-916e-46f4-bb07-6f8bd1826d7f.png)
สรุป :แสดงให้เห็นว่าต้องใช้เวลานานแค่ไหน สำหรับการรันเว็บในแต่ละหน้าตั้งแต่เริ่มใช้งาน เราได้มีการบันทึกเป็นตัวอย่างในการใช้งาน และผลที่ได้ใช้เวลา
- system : 6,620 ms
- scripting : 5,284 ms
- rendering : 2,718 ms
- painting : 2,203 ms
- loading : 143 ms

![image.png](/.attachments/image-04b9b767-750c-453f-920b-823043d19a10.png)
**ใส่** **console.time(“…”)** **เพื่อเริ่มจับเวลา และ** **console.timeEnd(“…”)** **เพื่อปิดการจับเวลา**

## **อธิบายการทำ** **CI/CD** **ที่ใช้ในการทำ** **Product**
### **CI: Continuous Integration**

![image.png](/.attachments/image-92b8ba01-5cac-46c0-818c-e89d8c8c8805.png)
1.โค้ดถูกดึงเข้ามาจาก Version Control System (VCS) เช่น Git ทุกครั้งที่มีการ commit หรือ push โค้ดไปที่ repository ระบบ CI จะเริ่มทำงานโดยอัตโนมัติ

เครื่องมือ CI จะตรวจสอบว่าโค้ดใน repository มีการเปลี่ยนแปลงหรือไม่

trigger:<br>
   -main #ทุกครั้งที่มีการ push ไปที่ branch 'main'

2.การ Build โค้ดจะทำงานอัตโนมัติ
ระบบจะทำการ build โค้ด เพื่อให้แน่ใจว่าโค้ดทั้งหมดสามารถนำมารวมกันได้สำเร็จ และไม่เกิดปัญหาขึ้นในระหว่างกระบวนการ

การ build นี้อาจรวมถึงการติดตั้ง dependencies, การคอมไพล์ไฟล์ หรือกระบวนการอื่นๆ ที่เกี่ยวข้อง
- script: |<br>
        npm install<br>
      displayName: 'npm install, build and test'**

3.การ Run Tests (Unit Tests, Integration Tests)
หลังจาก build โค้ดเสร็จแล้ว ระบบจะรันการทดสอบต่างๆ เช่น unit tests เพื่อทดสอบฟังก์ชันต่างๆ หรือ integration tests เพื่อทดสอบการทำงานร่วมกันของหลายๆ ส่วนในแอปพลิเคชัน

การทดสอบนี้จะช่วยให้แน่ใจว่าโค้ดที่เราเพิ่มหรือเปลี่ยนแปลงไปไม่ทำให้ระบบเกิดข้อผิดพลาดหรือทำงานผิดปกติ

- script: |<br>
        npx jest test/book.test.js test/review.test.js --coverage<br>
      displayName: 'npm install, build and test'

4.การตรวจสอบคุณภาพของโค้ด (Code Quality Analysis)
ในขั้นตอนนี้ ระบบจะทำการตรวจสอบคุณภาพของโค้ด เช่น การตรวจสอบ ESLint เพื่อหาข้อผิดพลาดในการเขียนโค้ด หรือใช้ Prettier เพื่อจัดระเบียบรูปแบบโค้ด
- script: |<br>
        npm run lint --if-present<br>
      displayName: 'npm install, build and test'<br>

5.ผลการทดสอบจะถูกส่งออกมาให้โปรแกรมเมอร์ทราบทันที
เมื่อกระบวนการทั้งหมดเสร็จสิ้น ระบบจะส่งผลลัพธ์ของการทดสอบกลับไปให้กับนักพัฒนา เช่น การแสดงผลที่ Pass หรือ Fail
### **CD (Continuous Deployment)**
     การทำงาน CD ะมุ่งเน้นไปที่การ deploy ผลิตภัณฑ์ไปยังสภาพแวดล้อมต่าง ๆ โดยมีการตรวจสอบคุณภาพและทดสอบอย่างละเอียดก่อนการเผยแพร่สู่ผู้ใช้งานจริง กระบวนการนี้ช่วยให้มั่นใจได้ว่าแอปพลิเคชันสามารถปล่อยได้โดยไม่มีปัญหาส่งผลกระทบต่อผู้ใช้ และสามารถกลับไปยังเวอร์ชันก่อนหน้าได้หากเกิดปัญหาในกระบวนการ deploy เนื่องจากปัญหา Azure subscription ทำให้ไม่มีสิทธิ์ในการใช้งานบริการบางอย่างจึงไม่สามารถ deploy web app ได้

      
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
- **Code Completion:** ดำเนินการพัฒนาโค้ดส่วนที่ยังไม่เสร็จจาก Sprint 3 ให้ครบถ้วน เช่น ฟังก์ชันเสริม ระบบย่อย หรือส่วนของ UI ที่ยังค้างอยู่  
- **Debugging:** ตรวจสอบข้อผิดพลาดที่เกิดขึ้นในโค้ดทั้งระบบ โดยใช้การทดสอบฟังก์ชัน (Functional Testing) และการทดสอบการทำงานร่วมกัน (Integration Testing) เพื่อแก้ไขบั๊กที่พบ  
- **UI Testing and Improvement:** ทดสอบการแสดงผลของ UI บนอุปกรณ์และเบราว์เซอร์ต่างๆ เพื่อให้แน่ใจว่า UI มีความสมบูรณ์ ใช้งานได้จริง และสอดคล้องกับดีไซน์ที่วางไว้  
- **Final Integration:** ตรวจสอบการเชื่อมต่อทั้งหมดระหว่าง Frontend, Backend และ Database ว่าสามารถทำงานร่วมกันได้อย่างไม่มีปัญหา  
**ผลลัพธ์:**  
โค้ดทั้งหมดถูกพัฒนาเสร็จสมบูรณ์ และผ่านกระบวนการ Debug และ Testing ทำให้ระบบมีความเสถียร สามารถทำงานได้อย่างมีประสิทธิภาพ พร้อมสำหรับการส่งมอบและเผยแพร่ใช้งานจริง

**สิ่งที่มีการเปลี่ยนแปลงจาก** **Sprint** **ที่** **3**  
- ใน Sprint 3, ทีมงานมุ่งเน้นไปที่การเริ่มพัฒนาโค้ดโดยอ้างอิงจาก UI Design และ Requirement ที่วิเคราะห์ไว้ โดยสร้างฟังก์ชันหลักต่างๆ และเชื่อมต่อส่วนประกอบของระบบให้ทำงานร่วมกันได้ แต่ยังไม่มีการทำ Testing อย่างเต็มรูปแบบ  
- ใน Sprint 4, ทีมงานดำเนินการเก็บรายละเอียดทุกส่วนให้สมบูรณ์ ทำการ Debug เพื่อแก้ไขข้อผิดพลาด และทำ Testing เพื่อยืนยันว่าระบบทำงานได้อย่างถูกต้อง มีความเสถียร และพร้อมสำหรับการส่งมอบในขั้นสุดท้าย

**อธิบายการทำงานโดยใช้ Process, Methods และ Tools (Phase 4)**
=============================================================

**Process**
- การจัดทำ Report และการระบุข้อมูลใน Report
- การประชุม Retrospective Phase 3
- ตรวจสอบ code และ debug โค้ดทั้งหมด
- ทำหน้า moodPage เพิ่มโดยมีฟังก์ชันเลือกอารมณ์ และเรียงลำดับจากคะแนนหนังสือได้
- สามารถลบ หรือแก้ไขรีวิวของผู้ใช้งานได้
- ทำการทดสอบ UI (UI Testing) เพื่อให้แน่ใจว่าฟังก์ชันการทำงานและการแสดงผลของหน้าจอถูกต้องตามที่ออกแบบ

**Methods**
- จัดทำ Report โดยใช้โปรแกรมเอกสารที่สามารถทำงานร่วมกันได้
- ประชุม Retrospective โดยการนั่งคุยกันและอัดคลิปวิดีโอ
- ดำเนินการทดสอบ UI ผ่านการใช้งานจริง โดยกำหนด Test Cases ล่วงหน้า และบันทึกผลการทดสอบไว้

**Tools**
- ประชุม Retrospective โดยใช้กล้องมือถืออัดคลิป โดยเผยแพร่วิดีโอการประชุมผ่านทาง Youtube
- ใช้ Cygwin ในการรันคำสั่งเพื่อจัดการกับ Test และเพื่อดู UI Test
- Coding โดยใช้ Visual Studio Code
- จัดทำ Report โดยใช้โปรแกรมเอกสารที่สามารถทำงานร่วมกันได้คือ Microsoft Word โดยแชร์ผ่าน OneDrive
- วิเคราะห์และศึกษาโค้ดต้นแบบจากเว็บไซต์ที่กลุ่มของเราใช้ออกแบบ คือ Figma.com

      

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
https://youtu.be/dfMW2MEtJmQ
- ทำโค้ดส่วนที่เหลือ ui test dynamic static test ของ phase ที่ 4
- ใน phase นี้พบเจอปัญหาคือ lack of communication ไม่ค่อยได้สื่อสารกัน เพราะภาระหน้าที่จากงานของวิชาอื่นเลยทำให้มีเวลาคุยกันน้อย ต่างคนต่างทำ แต่งานก็สามารถเสร็จออกมาลุล่วงด้วยดี

# **Link to submit report + source code (zip file) :** [https://drive.google.com/drive/folders/1AygxO5T6YZfnhxBeXBH4jQUFog69jomU?usp=sharing]()