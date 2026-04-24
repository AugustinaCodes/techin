# Leave Request Management App

## 📌 Your Task

You are building an internal tool for an HR team to manage employee leave requests.

Your job is to create a **React application** that allows HR staff to:

* create leave requests
* view all requests
* update requests
* delete requests
* filter requests

The app must use an **API (CRUD operations), JSON-SERVER as backend** and include **routing, forms, and validation, filtering**.

---

## 🚀 Features You Must Implement

### 1. Pages and Routing

Your app must have these routes:

* `/` — page, that shows: 
    * total number of requests 
    * number of requests by status (Pending, Approved, Rejected)
    * logo image
* `/requests` — list of all leave requests  (Page)
* `/requests/new` — create new request (Page with form)
* `/requests/:id` — view request details
* `/requests/:id/edit` — edit request
* `/404` — not found page (Page)

---

### 2. 📊 Data Model

Each leave request must include:

```json
{
  "id": "number",
  "employeeName": "string",
  "department": "string",
  "leaveType": "Vacation | Sick Leave | Remote Work | Unpaid Leave",
  "startDate": "date",
  "endDate": "date",
  "reason": "string",
  "status": "Pending | Approved | Rejected",
  "createdAt": "date"
}
```

---

### 3. 🔄 CRUD Operations (API)

You must connect your app to an API and implement:

* **GET** → fetch all requests
* **GET by ID** → fetch one request
* **POST** → create new request
* **PUT/PATCH** → update request
* **DELETE** → remove request

---

### 4. 📝 Form (Create & Edit)

Your form must include:

* Employee Name
* Department
* Leave Type (select)
* Start Date
* End Date
* Reason
* Status

---

### 5. ✅ Form Validation

You must validate:

* all fields are required
* end date ≥ start date
* reason ≥ 10 characters

You can use:

* React Hook Form
  or
* manual validation

---

### 6. 🔍 Filtering

On the main page, users must be able to filter by:

* employee name
* department
* leave type
* status

---

### 7. 🎨 UI Requirements

You must show:

* list (table or cards)
* loading state
* error state
* empty state (no results)

Each item must have:

* View
* Edit
* Delete (confirmation modal before delete)

---

# 📦 Starter API (JSON Server)

Use this file as `db.json`:

```json
{
  "requests": [
    {
      "id": 1,
      "employeeName": "John Smith",
      "department": "Engineering",
      "leaveType": "Vacation",
      "startDate": "2026-05-10",
      "endDate": "2026-05-15",
      "reason": "Family vacation trip",
      "status": "Pending",
      "createdAt": "2026-04-01"
    },
    {
      "id": 2,
      "employeeName": "Emma Johnson",
      "department": "Marketing",
      "leaveType": "Sick Leave",
      "startDate": "2026-04-20",
      "endDate": "2026-04-22",
      "reason": "Flu recovery period",
      "status": "Approved",
      "createdAt": "2026-04-18"
    },
    {
      "id": 3,
      "employeeName": "Michael Brown",
      "department": "Sales",
      "leaveType": "Remote Work",
      "startDate": "2026-04-25",
      "endDate": "2026-04-30",
      "reason": "Working remotely from another city",
      "status": "Pending",
      "createdAt": "2026-04-10"
    },
    {
      "id": 4,
      "employeeName": "Sophia Davis",
      "department": "HR",
      "leaveType": "Unpaid Leave",
      "startDate": "2026-06-01",
      "endDate": "2026-06-10",
      "reason": "Personal matters requiring time off",
      "status": "Rejected",
      "createdAt": "2026-04-05"
    }
  ]
}
```

### Run API:

```bash
npx json-server --watch db.json --port 3001
```

API base URL:

```
http://localhost:3001/requests
```

---

# 📁 Suggested Project Structure

```
src/
  components/
  pages/
  services/ (API calls)
  hooks/ (optional)
  App.jsx
```

---

# 🧪 Evaluation / Grading Rubric

| Criteria                                              | Points  |
| ----------------------------------------------------- | ------- |
| **CRUD functionality works correctly**                | 20      |
| **Routing (all pages work properly)**                 | 15      |
| **Form implementation**                               | 10      |
| **Form validation (correct + user-friendly)**         | 15      |
| **Filtering functionality**                           | 10      |
| **API integration (clean + reusable)**                | 10      |
| **UI/UX (clear, usable, states handled)**             | 10      |
| **Code quality (structure, readability, components)** | 10      |
| **Error handling (API failures, edge cases)**         | 5       |
| **Total**                                             | **100** |

---

