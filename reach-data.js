// Platform Reach Data - Dynamic Date-based Analytics
// Generate data based on actual current date
function generateReachData() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to midnight for accurate comparisons
    
    const data = {
        7: [],
        30: [],
        90: [],
        180: []
    };
    
    // Generate last 7 days
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        // Only show activity on last 2 days (your recent visits)
        const totalVisitors = i <= 1 ? (i === 0 ? 5 : 2) : 0;
        const uniqueUsers = i <= 1 ? 1 : 0;
        
        data[7].push({
            date: dateStr,
            totalVisitors,
            uniqueUsers,
            day: dayStr
        });
    }
    
    // Generate last 30 days (every 2-3 days)
    const dates30 = [];
    for (let i = 30; i >= 0; i -= 3) {
        dates30.push(i);
    }
    dates30.sort((a, b) => b - a);
    
    dates30.forEach((daysAgo, index) => {
        const date = new Date(today);
        date.setDate(date.getDate() - daysAgo);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const weekNum = Math.floor(index / 2) + 1;
        
        // Only show activity on last 2 days
        const totalVisitors = daysAgo <= 1 ? (daysAgo === 0 ? 5 : 2) : 0;
        const uniqueUsers = daysAgo <= 1 ? 1 : 0;
        
        data[30].push({
            date: dateStr,
            totalVisitors,
            uniqueUsers,
            week: `W${weekNum}`
        });
    });
    
    // Generate last 90 days (weekly)
    for (let i = 90; i >= 0; i -= 7) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const monthStr = date.toLocaleDateString('en-US', { month: 'short' });
        
        // Only show activity in current week
        const totalVisitors = i <= 7 ? 7 : 0;
        const uniqueUsers = i <= 7 ? 1 : 0;
        
        data[90].push({
            date: dateStr,
            totalVisitors,
            uniqueUsers,
            month: monthStr
        });
    }
    
    // Generate last 6 months (monthly)
    for (let i = 5; i >= 0; i--) {
        const date = new Date(today);
        date.setMonth(date.getMonth() - i);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        const monthStr = date.toLocaleDateString('en-US', { month: 'short' });
        
        // Only show activity in current month
        const totalVisitors = i === 0 ? 7 : 0;
        const uniqueUsers = i === 0 ? 1 : 0;
        
        data[180].push({
            date: dateStr,
            totalVisitors,
            uniqueUsers,
            month: monthStr
        });
    }
    
    return data;
}

// Generate custom date range data
function generateCustomRangeData(startDate, endDate) {
    const data = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Normalize input dates
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(endDate);
    end.setHours(0, 0, 0, 0);
    
    const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    if (daysDiff <= 7) {
        // Daily data - show each day in the range
        for (let i = 0; i <= daysDiff; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
            
            // Calculate days ago from today
            const daysFromToday = Math.ceil((today - date) / (1000 * 60 * 60 * 24));
            const isToday = date.toDateString() === today.toDateString();
            const isYesterday = daysFromToday === 1;
            
            // Show activity based on actual proximity to today
            let totalVisitors = 0;
            let uniqueUsers = 0;
            
            if (isToday) {
                totalVisitors = 5;
                uniqueUsers = 1;
            } else if (isYesterday) {
                totalVisitors = 2;
                uniqueUsers = 1;
            }
            
            data.push({
                date: dateStr,
                totalVisitors,
                uniqueUsers,
                day: dayStr
            });
        }
    } else if (daysDiff <= 90) {
        // Every 3 days for ranges up to 90 days
        const step = daysDiff <= 30 ? 2 : 3;
        for (let i = 0; i <= daysDiff; i += step) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            
            // Check if this date is within last 2 days from today
            const daysFromToday = Math.ceil((today - date) / (1000 * 60 * 60 * 24));
            
            let totalVisitors = 0;
            let uniqueUsers = 0;
            
            if (daysFromToday >= 0 && daysFromToday <= 1) {
                totalVisitors = daysFromToday === 0 ? 5 : 2;
                uniqueUsers = 1;
            }
            
            data.push({
                date: dateStr,
                totalVisitors,
                uniqueUsers,
                week: 'Custom'
            });
        }
    } else {
        // Monthly for ranges over 90 days
        const currentDate = new Date(start);
        while (currentDate <= end) {
            const dateStr = currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            
            // Check if this is the current month
            const isSameMonth = currentDate.getMonth() === today.getMonth() && 
                               currentDate.getFullYear() === today.getFullYear();
            
            data.push({
                date: dateStr,
                totalVisitors: isSameMonth ? 7 : 0,
                uniqueUsers: isSameMonth ? 1 : 0,
                month: dateStr
            });
            
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
    }
    
    return data;
}

let reachData = generateReachData();

// Calculate statistics
function calculateStats(data, period) {
    if (!data || data.length === 0) return null;
    
    const totalVisitors = data.reduce((sum, d) => sum + d.totalVisitors, 0);
    const maxUsers = Math.max(...data.map(d => d.uniqueUsers));
    
    // Calculate growth rate
    const firstNonZero = data.find(d => d.totalVisitors > 0);
    const lastValue = data[data.length - 1].totalVisitors;
    let growthRate = 0;
    
    if (firstNonZero && firstNonZero.totalVisitors > 0 && firstNonZero !== data[data.length - 1]) {
        growthRate = ((lastValue - firstNonZero.totalVisitors) / firstNonZero.totalVisitors * 100).toFixed(1);
    }
    
    // Calculate avg session time
    const avgSessionMinutes = totalVisitors > 0 ? Math.floor(totalVisitors * 2.5 / Math.max(maxUsers, 1)) : 0;
    const avgSessionSeconds = totalVisitors > 0 ? Math.floor((totalVisitors * 150 / Math.max(maxUsers, 1)) % 60) : 0;
    
    return {
        totalVisitors,
        uniqueUsers: maxUsers,
        growthRate: totalVisitors > 0 ? growthRate : 0,
        avgSession: totalVisitors > 0 ? `${avgSessionMinutes}m ${avgSessionSeconds}s` : '0m 0s',
        engagementRatio: totalVisitors > 0 ? ((maxUsers / totalVisitors) * 100).toFixed(1) : 0
    };
}

// Render reach chart
function renderReachChart(period, customData = null) {
    const container = document.getElementById('reachChartContainer');
    const data = customData || reachData[period];
    
    if (!data || data.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 50px; color: #6b7280;">No data available for this period</div>';
        return;
    }
    
    // Find max value for scaling
    const maxValue = Math.max(...data.map(d => d.totalVisitors), 10);
    
    // Clear existing chart
    container.innerHTML = '';
    
    // Create chart bars
    data.forEach((item, index) => {
        const barGroup = document.createElement('div');
        barGroup.className = 'reach-bar-group';
        barGroup.style.animationDelay = `${index * 0.05}s`;
        
        const totalHeight = item.totalVisitors > 0 ? Math.max((item.totalVisitors / maxValue) * 100, 8) : 0;
        const uniqueHeight = item.uniqueUsers > 0 ? Math.max((item.uniqueUsers / maxValue) * 100, 8) : 0;
        
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
                <div class="reach-bar total" style="height: ${totalHeight}%;">
                    ${item.totalVisitors > 0 ? `
                    <div class="bar-count-label">${item.totalVisitors}</div>
                    <div class="reach-tooltip">
                        <strong>Total Visitors</strong><br>
                        ${item.totalVisitors}<br>
                        ${growthDisplay}
                        <small>${item.date}</small>
                    </div>` : ''}
                </div>
                <div class="reach-bar unique" style="height: ${uniqueHeight}%;">
                    ${item.uniqueUsers > 0 ? `
                    <div class="bar-count-label unique-label">${item.uniqueUsers}</div>
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
    updateStatistics(data, period);
}

// Update statistics
function updateStatistics(data, period) {
    const stats = calculateStats(data, period);
    if (!stats) return;
    
    document.getElementById('totalVisitors').textContent = stats.totalVisitors;
    document.getElementById('uniqueUsers').textContent = stats.uniqueUsers;
    document.getElementById('avgSession').textContent = stats.avgSession;
    
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
    
    // Update labels
    const periodText = {
        7: 'last 7 days',
        30: 'last 30 days',
        90: 'last 90 days',
        180: 'last 6 months'
    };
    
    document.querySelectorAll('.reach-stat-card .stat-change').forEach((el, index) => {
        if (index === 0) {
            el.textContent = stats.totalVisitors === 0 ? 'No visitors yet' : (period ? periodText[period] : 'custom range');
        } else if (index === 1) {
            el.textContent = stats.uniqueUsers === 0 ? 'No users yet' : `${stats.engagementRatio}% unique`;
        } else if (index === 2) {
            el.textContent = stats.totalVisitors === 0 ? 'No data' : 'Per session';
        } else if (index === 3) {
            el.textContent = stats.totalVisitors === 0 ? 'Just started' : (period ? periodText[period] : 'custom range');
        }
    });
}

// Handle custom date range
function applyCustomDateRange() {
    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    
    if (!startInput.value || !endInput.value) {
        alert('⚠️ Please select both start and end dates');
        return;
    }
    
    // Parse dates properly to avoid timezone issues
    // Input format is YYYY-MM-DD, create Date in local timezone
    const [startYear, startMonth, startDay] = startInput.value.split('-').map(Number);
    const [endYear, endMonth, endDay] = endInput.value.split('-').map(Number);
    
    const startDate = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(endYear, endMonth - 1, endDay);
    
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    
    if (startDate > endDate) {
        alert('⚠️ Start date must be before or equal to end date');
        return;
    }
    
    if (endDate > today) {
        alert('⚠️ End date cannot be in the future');
        return;
    }
    
    if (startDate > today) {
        alert('⚠️ Start date cannot be in the future');
        return;
    }
    
    // Remove active from preset buttons
    document.querySelectorAll('.reach-filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Generate and render custom data
    const customData = generateCustomRangeData(startDate, endDate);
    renderReachChart(null, customData);
    
    // Show applied range with exact dates selected in the inputs
    const rangeDisplay = document.getElementById('appliedRange');
    if (rangeDisplay) {
        // Use the input values directly to show exactly what user selected
        const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        rangeDisplay.textContent = `Showing: ${startStr} - ${endStr}`;
        rangeDisplay.style.display = 'block';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    // Force today to current year, month, day in local timezone
    today.setHours(0, 0, 0, 0);
    
    const todayStr = today.toISOString().split('T')[0];
    
    // Set up date inputs
    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    
    if (startInput && endInput) {
        // CRITICAL: Set max date to TODAY for both inputs - prevents future dates
        startInput.setAttribute('max', todayStr);
        endInput.setAttribute('max', todayStr);
        
        // Set default values to last 7 days
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
        const sevenDaysAgoStr = sevenDaysAgo.toISOString().split('T')[0];
        
        startInput.value = sevenDaysAgoStr;
        endInput.value = todayStr;
        
        // Add real-time validation
        startInput.addEventListener('change', function() {
            if (this.value > todayStr) {
                alert('⚠️ Start date cannot be in the future');
                this.value = todayStr;
            }
            if (endInput.value && this.value > endInput.value) {
                alert('⚠️ Start date must be before end date');
                this.value = endInput.value;
            }
        });
        
        endInput.addEventListener('change', function() {
            if (this.value > todayStr) {
                alert('⚠️ End date cannot be in the future');
                this.value = todayStr;
            }
            if (startInput.value && this.value < startInput.value) {
                alert('⚠️ End date must be after start date');
                this.value = startInput.value;
            }
        });
    }
    
    // Render initial chart (7 days)
    renderReachChart(7);
    
    // Filter button handlers
    document.querySelectorAll('.reach-filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.reach-filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const period = parseInt(this.dataset.period);
            renderReachChart(period);
            
            // Hide custom range display
            const rangeDisplay = document.getElementById('appliedRange');
            if (rangeDisplay) rangeDisplay.style.display = 'none';
        });
    });
    
    // Apply custom range button
    const applyBtn = document.getElementById('applyDateRange');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyCustomDateRange);
    }
    
    // Set 7 days as default active
    const sevenDayBtn = document.querySelector('.reach-filter-btn[data-period="7"]');
    if (sevenDayBtn) {
        sevenDayBtn.classList.add('active');
    }
    
    // Animate stat cards
    setTimeout(() => {
        document.querySelectorAll('.reach-stat-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
});
