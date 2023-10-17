const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  
  let currentMonth = 9; // 0 is January, 11 is December (for October)
  
  // Sample mapping of dates to blog post URLs (modify with your own data)
  const blogPostMapping = {
    '2023-10-16': 'blogs/blog1.html',
    '2023-10-15': 'blog-post-2.html',
    '2023-10-20': 'blog-post-3.html',
    // ... Add more mappings as needed
  };
  
  function updateCalendar() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentMonth;  // Use the specified month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
  
    const datesContainer = document.querySelector('.dates');
    datesContainer.innerHTML = ''; // Clear existing dates
  
    // Add empty slots for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyDate = document.createElement('div');
      emptyDate.classList.add('date', 'empty');
      datesContainer.appendChild(emptyDate);
    }
  
    // Add the dates of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = document.createElement('div');
      date.classList.add('date');
      date.innerText = i;
  
      // Add a dot with a link to the blog post
      const blogDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      if (blogPostMapping[blogDate]) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
          window.location.href = blogPostMapping[blogDate];
        });
        date.appendChild(dot);
  
        // Add click event to the date to redirect to the blog post
        date.addEventListener('click', () => {
          window.location.href = blogPostMapping[blogDate];
        });
      }
  
      datesContainer.appendChild(date);
    }
  
    // Update the displayed month
    document.getElementById('current-month').innerText = `${monthNames[month]} ${year}`;
  }
  
  function prevMonth() {
    currentMonth = (currentMonth - 1 + 12) % 12;
    updateCalendar();
  }
  
  function nextMonth() {
    currentMonth = (currentMonth + 1) % 12;
    updateCalendar();
  }
  
  // Initial call to set up the calendar
  updateCalendar();
  