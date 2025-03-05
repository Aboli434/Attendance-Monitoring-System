const studentData = {
    totalDays: 100,
    presentDays: 85,
  };
  
  const totalDays = studentData.totalDays;
  const presentDays = studentData.presentDays;
  const absentDays = totalDays - presentDays;
  const attendancePercentage = (presentDays / totalDays) * 100;
  
  // Update HTML elements
  document.getElementById('total-days').textContent = totalDays;
  document.getElementById('present-days').textContent = presentDays;
  document.getElementById('absent-days').textContent = absentDays;
  document.getElementById('attendance-percentage').textContent = attendancePercentage.toFixed(2);
  
  // Create pie chart
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  const attendanceChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [presentDays, absentDays],
        backgroundColor: ['green', 'red']
      }]
    }
  });
  