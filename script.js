function changeTab(tabNumber) {
    document.querySelectorAll('.tabs-box .tab').forEach(tab => {
      tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
  
    const tab = document.querySelector(`.tabs-box .tab:nth-child(${tabNumber})`);
    const content = document.querySelector(`.tab-content:nth-child(${tabNumber})`);
  
    if (tab && content) {
      tab.classList.add('active');
      content.classList.add('active');
    }
  }
  