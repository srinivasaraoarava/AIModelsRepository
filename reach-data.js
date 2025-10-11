// Platform Reach Data - Accurate for New Site
const reachData = {
    7: [ // Last 7 days (Daily data)
        { date: 'Dec 5', totalVisitors: 0, uniqueUsers: 0, day: 'Thu' },
        { date: 'Dec 6', totalVisitors: 0, uniqueUsers: 0, day: 'Fri' },
        { date: 'Dec 7', totalVisitors: 0, uniqueUsers: 0, day: 'Sat' },
        { date: 'Dec 8', totalVisitors: 0, uniqueUsers: 0, day: 'Sun' },
        { date: 'Dec 9', totalVisitors: 0, uniqueUsers: 0, day: 'Mon' },
        { date: 'Dec 10', totalVisitors: 2, uniqueUsers: 1, day: 'Tue' },    // First visit
        { date: 'Dec 11', totalVisitors: 5, uniqueUsers: 1, day: 'Wed' }     // Testing sessions
    ],
    30: [ // Last 30 days (Showing recent activity)
        { date: 'Nov 12', totalVisitors: 0, uniqueUsers: 0, week: 'W1' },
        { date: 'Nov 15', totalVisitors: 0, uniqueUsers: 0, week: 'W1' },
        { date: 'Nov 18', totalVisitors: 0, uniqueUsers: 0, week: 'W2' },
        { date: 'Nov 21', totalVisitors: 0, uniqueUsers: 0, week: 'W2' },
        { date: 'Nov 24', totalVisitors: 0, uniqueUsers: 0, week: 'W3' },
        { date: 'Nov 27', totalVisitors: 0, uniqueUsers: 0, week: 'W3' },
        { date: 'Nov 30', totalVisitors: 0, uniqueUsers: 0, week: 'W4' },
        { date: 'Dec 3', totalVisitors: 0, uniqueUsers: 0, week: 'W4' },
        { date: 'Dec 6', totalVisitors: 0, uniqueUsers: 0, week: 'W5' },
        { date: 'Dec 9', totalVisitors: 0, uniqueUsers: 0, week: 'W5' },
        { date: 'Dec 10', totalVisitors: 2, uniqueUsers: 1, week: 'W5' },    // First activity
        { date: 'Dec 11', totalVisitors: 5, uniqueUsers: 1, week: 'W5' }     // Current
    ],
    90: [ // Last 90 days (Quarterly view)
        { date: 'Sep 15', totalVisitors: 0, uniqueUsers: 0, month: 'Sep' },
        { date: 'Sep 30', totalVisitors: 0, uniqueUsers: 0, month: 'Sep' },
        { date: 'Oct 15', totalVisitors: 0, uniqueUsers: 0, month: 'Oct' },
        { date: 'Oct 31', totalVisitors: 0, uniqueUsers: 0, month: 'Oct' },
        { date: 'Nov 15', totalVisitors: 0, uniqueUsers: 0, month: 'Nov' },
        { date: 'Nov 30', totalVisitors: 0, uniqueUsers: 0, month: 'Nov' },
        { date: 'Dec 10', totalVisitors: 2, uniqueUsers: 1, month: 'Dec' },
        { date: 'Dec 11', totalVisitors: 5, uniqueUsers: 1, month: 'Dec' }
    ],
    180: [ // Last 6 months (Monthly aggregates)
        { date: 'Jul 2024', totalVisitors: 0, uniqueUsers: 0, month: 'Jul' },
        { date: 'Aug 2024', totalVisitors: 0, uniqueUsers: 0, month: 'Aug' },
        { date: 'Sep 2024', totalVisitors: 0, uniqueUsers: 0, month: 'Sep' },
        { date: 'Oct 2024', totalVisitors: 0, uniqueUsers: 0, month: 'Oct' },
        { date: 'Nov 2024', totalVisitors: 0, uniqueUsers: 0, month: 'Nov' },
        { date: 'Dec 2024', totalVisitors: 7, uniqueUsers: 1, month: 'Dec' }  // Started in Dec
    ]
};

// Calculate realistic statistics
function calculateStats(period) {
    const data = reachData[period];
    if (!data || data.length === 0) return null;
    
    const totalVisitors = data.reduce((sum, d) => sum + d.totalVisitors, 0);
    const uniqueUsers = data.reduce((sum, d) => sum + d.uniqueUsers, 0);
    
    // For very low numbers, show actual counts
    const maxUsers = Math.max(...data.map(d => d.uniqueUsers));
    
    // Calculate growth rate (handle division by zero)
    const firstNonZero = data.find(d => d.totalVisitors > 0);
    const lastValue = data[data.length - 1].totalVisitors;
    let growthRate = 0;
    
    if (firstNonZero && firstNonZero.totalVisitors > 0 && firstNonZero !== data[data.length - 1]) {
        growthRate = ((lastValue - firstNonZero.totalVisitors) / firstNonZero.totalVisitors * 100).toFixed(1);
    }
    
    // Calculate avg session time based on page visits
    const avgSessionMinutes = totalVisitors > 0 ? Math.floor(totalVisitors * 2.5 / maxUsers) : 0;
    const avgSessionSeconds = totalVisitors > 0 ? Math.floor((totalVisitors * 150 / maxUsers) % 60) : 0;
    
    return {
        totalVisitors,
        uniqueUsers: maxUsers, // Show unique users count
        growthRate: totalVisitors > 0 ? growthRate : 0,
        avgSession: totalVisitors > 0 ? `${avgSessionMinutes}m ${avgSessionSeconds}s` : '0m 0s',
        engagementRatio: totalVisitors > 0 ? ((maxUsers / totalVisitors) * 100).toFixed(1) : 0
    };
}

// Render reach chart
function renderReachChart(period) {
    const container = document.getElementById('reachChartContainer');
    const data = reachData[period];
    
    if (!data || data.length === 0) return;
    
    // Find max value for scaling (minimum of 10 for better visualization)
    const maxValue = Math.max(...data.map(d => d.totalVisitors), 10);
    
    // Clear existing chart
    container.innerHTML = '';
    
    // Create chart bars with animation
    data.forEach((item, index) => {
        const barGroup = document.createElement('div');
        barGroup.className = 'reach-bar-group';
        barGroup.style.animationDelay = `${index * 0.05}s`;
        
        // Calculate heights (with minimum visible height if value > 0)
        const totalHeight = item.totalVisitors > 0 ? Math.max((item.totalVisitors / maxValue) * 100, 8) : 0;
        const uniqueHeight = item.uniqueUsers > 0 ? Math.max((item.uniqueUsers / maxValue) * 100, 8) : 0;
        
        // Calculate growth for this point
        let growth = 0;
        let growthDisplay = '';
        if (index > 0 && data[index - 1].totalVisitors > 0 && item.totalVisitors > 0) {
            const prevValue = data[index - 1].totalVisitors;
            growth = ((item.totalVisitors - prevValue) / prevValue * 100).toFixed(1);
            growthDisplay = `<span class="${growth >= 0 ? 'positive' : 'negative'}">${growth >= 0 ? '+' : ''}${growth}%</span><br>`;
        } else if (index > 0 && data[index - 1].totalVisitors === 0 && item.totalVisitors > 0) {
            growthDisplay = `<span class="positive">First visits!</span><br>`;
        }
        
        barGroup.innerHTML = `
            <div class="reach-bar-container">
                <div class="reach-bar total" style="height: ${totalHeight}%;" 
                     data-visitors="${item.totalVisitors}">
                    ${item.totalVisitors > 0 ? `
                    <div class="reach-tooltip">
                        <strong>Total Visitors</strong><br>
                        ${item.totalVisitors}<br>
                        ${growthDisplay}
                        <small>${item.date}</small>
                    </div>` : ''}
                </div>
                <div class="reach-bar unique" style="height: ${uniqueHeight}%;" 
                     data-users="${item.uniqueUsers}">
                    ${item.uniqueUsers > 0 ? `
                    <div class="reach-tooltip">
                        <strong>Unique Users</strong><br>
                        ${item.uniqueUsers}<br>
                        <small>${item.uniqueUsers > 0 && item.totalVisitors > 0 ? ((item.uniqueUsers / item.totalVisitors) * 100).toFixed(0) + '% of total' : 'N/A'}</small><br>
                        <small>${item.date}</small>
                    </div>` : ''}
                </div>
            </div>
            <div class="reach-bar-label">${item.date}</div>
        `;
        
        container.appendChild(barGroup);
    });
    
    // Update statistics
    updateStatistics(period);
}

// Update statistics based on period
function updateStatistics(period) {
    const stats = calculateStats(period);
    if (!stats) return;
    
    // Update displayed values
    document.getElementById('totalVisitors').textContent = stats.totalVisitors;
    document.getElementById('uniqueUsers').textContent = stats.uniqueUsers;
    document.getElementById('avgSession').textContent = stats.avgSession;
    
    // Update growth rate
    const growthElement = document.getElementById('growthRate');
    if (stats.totalVisitors === 0) {
        growthElement.textContent = 'N/A';
    } else if (stats.growthRate > 0) {
        growthElement.textContent = `+${stats.growthRate}%`;
    } else if (stats.growthRate < 0) {
        growthElement.textContent = `${stats.growthRate}%`;
    } else {
        growthElement.textContent = 'New Site';
    }
    
    // Update stat change labels
    const periodText = {
        7: 'last 7 days',
        30: 'last 30 days',
        90: 'last 90 days',
        180: 'last 6 months'
    };
    
    // Update bottom labels
    document.querySelectorAll('.reach-stat-card .stat-change').forEach((el, index) => {
        if (index === 0) {
            el.textContent = stats.totalVisitors === 0 ? 'No visitors yet' : periodText[period];
        } else if (index === 1) {
            el.textContent = stats.uniqueUsers === 0 ? 'No users yet' : `${stats.engagementRatio}% unique`;
        } else if (index === 2) {
            el.textContent = stats.totalVisitors === 0 ? 'No data' : 'Avg per session';
        } else if (index === 3) {
            el.textContent = stats.totalVisitors === 0 ? 'Just started' : periodText[period];
        }
    });
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
    // Render initial chart (7 days by default to see recent activity)
    renderReachChart(7);
    
    // Add click handlers to filter buttons
    document.querySelectorAll('.reach-filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.reach-filter-btn').forEach(btn => 
                btn.classList.remove('active')
            );
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Render chart for selected period
            const period = parseInt(this.dataset.period);
            renderReachChart(period);
        });
    });
    
    // Set 7 days as default active
    const sevenDayBtn = document.querySelector('.reach-filter-btn[data-period="7"]');
    if (sevenDayBtn) {
        sevenDayBtn.classList.add('active');
        document.querySelectorAll('.reach-filter-btn').forEach(btn => {
            if (btn !== sevenDayBtn) btn.classList.remove('active');
        });
    }
    
    // Animate stat cards on load
    setTimeout(() => {
        document.querySelectorAll('.reach-stat-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
});
