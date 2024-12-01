# User Dashboard

A modern and professional user dashboard built using **React**, **Material-UI (MUI)**, and **Chart.js**. This dashboard displays key user statistics, including total and active users, and a breakdown of users by location. The dashboard also includes interactive charts and a table to view user activities.

## Features

- **Total Users & Active Users**: Displayed in separate cards with badge indicators.
- **Users by Location**: Organized and displayed professionally using cards with location-based user counts.
- **Data Trends**: Interactive charts showing user registration trends and activity counts.
- **User Activities Table**: A paginated table displaying user activities with filtering by status.

## Technologies Used

- **React**: For building the interactive UI.
- **Material-UI (MUI)**: For modern design components and layout.
- **react-chartjs-2 & Chart.js**: For creating interactive line and bar charts.
- **Axios**: For making API calls to fetch user data.

## Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-dashboard.git
cd user-dashboard
2. Install Dependencies
Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from here.

Install the required dependencies:

bash
Copy code
npm install
This will install all the necessary packages listed in package.json, including Material-UI, react-chartjs-2, and Axios.

3. Running the Application
Once the dependencies are installed, you can start the development server:

bash
Copy code
npm start
This will start the application at http://localhost:3000 in your browser. You should see the dashboard with the following features:

Total Users
Active Users
Users by Location
Data Trends (Line and Bar charts)
User Activities Table (Paginated)
Folder Structure
bash
Copy code
/src
  /components
    UserStatistics.jsx       # Displays user statistics and location breakdown
    DataTrendsChart.jsx      # Displays charts (line and bar) for data trends
    ActivitiesTable.jsx      # Displays a paginated table of user activities
  /utils
    api.js                  # Contains API calls to fetch data (mocked for now)
  App.jsx                   # Main component, rendering the layout
  index.js                  # Entry point for the React app
API
This project uses a mock API to fetch user data. The API endpoints used are:

Users: https://jsonplaceholder.typicode.com/users
User Activities: https://jsonplaceholder.typicode.com/todos
These APIs provide mock data for demonstration purposes. You can replace them with your own real API if needed.

Development Notes
UserStatistics: Displays total users, active users, and users by location.
DataTrendsChart: Displays line and bar charts showing user registration trends and activity counts.
ActivitiesTable: Displays a paginated table with user activities, showing status (completed or pending).
Customization
You can customize the following aspects of the dashboard:

Data Fetching: Modify the API calls in api.js to fetch data from your backend.
Chart Data: Adjust the chart data in DataTrendsChart.jsx to reflect real user trends.
Future Improvements
Add authentication and user roles to make the dashboard more dynamic.
Integrate with a real backend API to fetch live data.
Add more interactivity such as filtering and sorting for the activities table.
Contributing
Feel free to fork the repository and submit pull requests for any improvements or fixes. If you encounter any issues, please open an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.
