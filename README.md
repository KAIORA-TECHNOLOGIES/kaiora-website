# KAIORA TECHNOLOGIES Website

Responsive static website built with HTML5, CSS3 and vanilla JavaScript.

## Included
- Home, About, Courses, Packages and Contact pages
- Official KAIORA logo and original internship program poster
- Four separate course detail pages:
  - `courses/full-stack.html`
  - `courses/python.html`
  - `courses/ai-ml.html`
  - `courses/hardware-robotics.html`
- Course syllabus and student-benefit information
- A course-specific Free Assistance form on each course page
- Enquiry fields: student name, email, phone number and selected course
- Enquiries submitted to `kaioratechnologies@gmail.com` through FormSubmit
- Basic (₹250), Standard (₹500) and Premium (₹1,000) package details
- Package-wise certificate information and eligibility details (no sample certificate images included)
- Batch dates: November 30, 2026 and December 7, 2026
- Google registration form, GitHub, Instagram and official email
- Public phone numbers are not displayed

## Run locally
1. Extract the ZIP.
2. Open the extracted `KAIORA_TECHNOLOGIES_WEBSITE` folder in Visual Studio Code.
3. Install the Live Server extension if needed.
4. Right-click `index.html` and choose **Open with Live Server**.

## Publish with GitHub Pages
1. Open the `KAIORA-TECHNOLOGIES` GitHub repository.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

## Enquiry email setup
- The Free Assistance forms submit to FormSubmit's AJAX endpoint for `kaioratechnologies@gmail.com`.
- On first use, FormSubmit may send an activation/confirmation email to the owner address. The owner must open that email and activate the form before notifications can be delivered.
- Test each course form after publishing over HTTPS. A successful on-page message is shown only when the service confirms successful submission.
- Student information is emailed to the owner and is not displayed publicly by this static website.
- This package does not include a private owner dashboard or Google Sheets integration. If you want a searchable enquiry database, connect a separate private spreadsheet/backend service.

## Registration
The main Register buttons open the supplied Google Form. Confirm that the form is accepting responses before publishing.

## Assets
- `assets/logo/kaiora-logo.jpeg` (original supplied logo; unchanged)
- `assets/posters/kaiora-internship-program-poster.png` (original supplied poster; unchanged)
