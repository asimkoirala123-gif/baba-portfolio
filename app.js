// Embedded fallback CSV strings for instant demo loading (zero-dependency / offline mode)
const DEMO_SHARES_CSV = `"S.N","Scrip","Current Balance","Last Closing Price","Value as of Last Closing Price","Last Transaction Price (LTP)","Value as of LTP"
"1","ADBL","553.0","310.0","171430.00","309.0","170877.00"
"2","BANDIPUR","50.0","820.0","41000.00","816.3","40815.00"
"3","BJHL","10.0","855.0","8550.00","840.1","8401.00"
"4","CBBL","366.0","915.0","334890.00","911.0","333426.00"
"5","CGH","295.0","785.0","231575.00","790.5","233197.50"
"6","CHCL","510.0","484.9","247299.00","483.7","246687.00"
"7","CIT","251.0","1741.0","436991.00","1746.0","438246.00"
"8","EBL","656.0","702.0","460512.00","700.1","459265.60"
"9","FMDBL","150.0","781.0","117150.00","784.0","117600.00"
"10","FOWAD","148.0","1029.9","152425.20","1025.0","151700.00"
"11","GBBL","592.0","410.9","243252.80","410.0","242720.00"
"12","GBIME","1873.0","240.0","449520.00","240.0","449520.00"
"13","HDL","172.0","1158.0","199176.00","1155.6","198763.20"
"14","HIDCL","838.0","263.5","220813.00","262.5","219975.00"
"15","HLBSL","17.0","876.1","14893.70","865.1","14706.70"
"16","HLI","208.0","339.0","70512.00","338.0","70304.00"
"17","HRL","22.0","638.7","14051.40","637.0","14014.00"
"18","JBLB","103.0","1278.0","131634.00","1271.0","130913.00"
"19","KDL","67.0","830.0","55610.00","818.1","54812.70"
"20","KMCDB","67.0","847.1","56755.70","842.6","56454.20"
"21","MBL","912.0","248.0","226176.00","248.1","226267.20"
"22","MLBSL","98.0","1800.0","176400.00","1780.0","174440.00"
"23","MMF1","5100.0","9.52","48552.00","9.57","48807.00"
"24","MNBBL","442.0","375.0","165750.00","375.0","165750.00"
"25","MSLB","37.0","1249.0","46213.00","1230.0","45510.00"
"26","NABIL","3247.0","533.1","1730975.70","532.5","1729027.50"
"27","NADEP","30.0","750.0","22500.00","741.0","22230.00"
"28","NBF2","12000.0","9.88","118560.00","9.94","119280.00"
"29","NBF3","12870.0","10.0","128700.00","9.95","128056.50"
"30","NBL","1596.0","268.0","427728.00","265.3","423418.80"
"31","NICA","105.0","342.0","35910.00","340.1","35710.50"
"32","NICLBSL","65.0","569.0","36985.00","568.1","36926.50"
"33","NICSF","13100.0","9.45","123795.00","9.43","123533.00"
"34","NIFRA","1222.0","259.6","317231.20","260.5","318331.00"
"35","NIMB","1634.0","196.7","321407.80","195.3","319120.20"
"36","NIMBPO","220.0","145.0","31900.00","145.0","31900.00"
"37","NLICL","208.0","582.6","121180.80","584.0","121472.00"
"38","NMB","1081.0","245.9","265817.90","243.6","263331.60"
"39","NMFBS","104.0","1138.0","118352.00","1138.0","118352.00"
"40","NMLBBL","160.0","586.8","93888.00","580.4","92864.00"
"41","NUBL","121.0","652.7","78976.70","655.0","79255.00"
"42","PCBL","387.0","237.4","91873.80","236.5","91525.50"
"43","PCIL","10.0","755.9","7559.00","745.0","7450.00"
"44","PMLI","81.0","468.0","37908.00","465.1","37673.10"
"45","RHPL","240.0","270.0","64800.00","265.7","63768.00"
"46","RIDI","273.0","345.0","94185.00","347.0","94731.00"
"47","RMF1","21850.0","9.77","213474.50","9.8","214130.00"
"48","RSDC","76.0","660.0","50160.00","662.0","50312.00"
"49","SAIL","50.0","1065.0","53250.00","1060.0","53000.00"
"50","SBI","310.0","271.0","84010.00","270.0","83700.00"
"51","SBL","616.0","293.0","180488.00","291.9","179810.40"
"52","SBLD2091","200.0","1010.0","202000.00","1010.0","202000.00"
"53","SCB","565.0","820.0","463300.00","820.0","463300.00"
"54","SHIVM","135.0","555.0","74925.00","555.0","74925.00"
"55","SJCL","270.0","330.1","89127.00","331.0","89370.00"
"56","SJLIC","354.0","412.0","145848.00","410.0","145100.00"
"57","SKHL","10.0","325.0","3250.00","320.1","3201.00"
"58","SMATA","124.0","920.0","114080.00","915.2","113484.80"
"59","SRLI","179.0","430.0","76970.00","425.0","76075.00"
"60","SSIS","5000.0","11.2","56000.00","11.1","55500.00"
"61","SYPNL","70.0","405.0","28350.00","401.0","28070.00"
"62","TTL","270.0","740.0","199800.00","735.0","198450.00"
"63","ULHC","10.0","380.0","3800.00","372.0","3720.00"
"64","UPPER","1535.0","258.0","396030.00","259.0","397565.00"
"65","USHEC","10.0","335.0","3350.00","330.0","3300.00"
"66","VLBS","147.0","825.0","121275.00","820.5","120613.50"
"67","WNLB","10.0","850.0","8500.00","840.0","8400.00"`;

const DEMO_WACC_CSV = `Scrip,WACC Calculated Quantity,WACC Rate,Total Cost Of Capital
ADBL,553,231.9538,"128,270.47"
BJHL,10,100,"1,000"
CGH,295,923.7287,"272,499.96"
EBL,656,536.8036,"352,143.18"
GBBL,592,192.2799,"113,829.71"
HDL,172,"1,200.76","206,530.12"
HIDCL,838,207.3789,"173,783.53"
HLBSL,17,878.7481,"14,938.72"
JBLB,103,"1,301.24","134,027.44"
KDL,67,778.0478,"52,129.21"
KMCDB,67,532.5748,"35,682.51"
MMF1,5100,8.4855,"43,276.04"
MNBBL,442,264.4758,"116,898.30"
MSLB,37,"1,013.87","37,513.06"
NBF3,12870,9.3049,"119,754.20"
NICSF,13100,9.3624,"122,646.80"
NLICL,208,423.377,"88,062.41"
NMFBS,104,"1,129.44","117,461.34"
NUBL,121,594.1572,"71,893.02"
PCBL,387,160.6211,"62,160.38"
PCIL,10,100,"1,000"
PLI,81,592.5974,"48,000.39"
RMF1,21850,9.059,"197,939.90"
SBI,310,528.9187,"163,964.81"
SBL,616,283.3244,"174,527.85"
SBLD2091,200,"1,000","200,000"
SCB,565,830.9628,"469,493.98"
SHIVM,135,338.7989,"45,737.85"
SJCL,270,363.9717,"98,272.37"
SJLIC,354,415.8091,"147,196.42"
SKHL,10,100,"1,000"
SMATA,124,"1,137.96","141,106.50"
SRLI,179,515.1406,"92,210.17"
SSIS,5000,10,"50,000"
SYPNL,70,792.7461,"55,492.23"
TTL,270,835.9415,"225,704.21"
UPPER,1535,188.621,"289,533.20"
VLBS,147,468.2922,"68,838.95"`;

// App State
// App State
const state = {
    mySharesRaw: null,
    waccRaw: null,
    holdings: [],
    filteredHoldings: [],
    searchQuery: '',
    currentTab: 'dashboard', // 'dashboard', 'holdings'
    filterTab: 'all', // 'all', 'profit', 'loss'
    sortBy: 'pl-desc', // 'pl-desc', 'pl-asc', 'value-desc', 'scrip-asc'
    selectedScrip: null,
    sellSim: {
        price: 0,
        qty: 0,
        cgtRate: 0.05 // 5% CGT standard for long term, or 7.5% for short term
    }
};

// CSV Parser Helper
function parseCSV(text) {
    if (!text) return [];
    const lines = [];
    let row = [""];
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                row[row.length - 1] += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            row.push("");
        } else if ((char === '\r' || char === '\n') && !inQuotes) {
            if (char === '\r' && nextChar === '\n') {
                i++;
            }
            lines.push(row);
            row = [""];
        } else {
            row[row.length - 1] += char;
        }
    }
    if (row.length > 1 || row[0] !== "") {
        lines.push(row);
    }

    if (lines.length === 0) return [];

    // Header extraction
    const headers = lines[0].map(h => h.trim().replace(/^"|"$/g, ''));
    const data = [];

    for (let j = 1; j < lines.length; j++) {
        const values = lines[j];
        if (values.length < headers.length) continue;
        const obj = {};
        for (let k = 0; k < headers.length; k++) {
            obj[headers[k]] = values[k] ? values[k].trim().replace(/^"|"$/g, '') : '';
        }
        data.push(obj);
    }

    return data;
}

// Clean numeric values containing commas
function cleanNum(val) {
    if (!val) return 0;
    const cleanStr = String(val).replace(/,/g, '');
    const num = parseFloat(cleanStr);
    return isNaN(num) ? 0 : num;
}

// Format numbers as per South Asian/Nepalese numbering format (Crore, Lakhs, etc.)
function formatNepali(num, decimals = 2) {
    if (num === null || num === undefined || isNaN(num)) return 'N/A';
    return Number(num).toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}


// Processing & Merging Uploaded Data
function processData() {
    if (!state.mySharesRaw || !state.waccRaw) {
        return;
    }

    const sharesParsed = parseCSV(state.mySharesRaw);
    const waccParsed = parseCSV(state.waccRaw);

    const waccMap = {};
    waccParsed.forEach(row => {
        // Handle variations in WACC headers: "Scrip Name" (All time.csv) vs "Scrip" (Current Companies.csv)
        const scripKey = (row['Scrip'] || row['Scrip Name'] || '').trim().toUpperCase();
        if (scripKey) {
            waccMap[scripKey] = {
                qty: cleanNum(row['WACC Calculated Quantity']),
                rate: cleanNum(row['WACC Rate']),
                cost: cleanNum(row['Total Cost Of Capital'] || row['Total Cost of Capital'])
            };
        }
    });

    const holdings = [];

    sharesParsed.forEach(row => {
        const scrip = (row['Scrip'] || '').trim().toUpperCase();
        if (!scrip) return;

        const balance = cleanNum(row['Current Balance']);
        if (balance <= 0) return; // Skip if no shares balance

        const ltp = cleanNum(row['Last Transaction Price (LTP)']) || cleanNum(row['Last Closing Price']);
        const currentValue = balance * ltp;

        let waccRate = 0;
        let totalCost = 0;
        let profitLoss = 0;
        let profitLossPct = 0;
        const hasWacc = !!waccMap[scrip];

        if (hasWacc) {
            waccRate = waccMap[scrip].rate;
            totalCost = balance * waccRate;
            profitLoss = currentValue - totalCost;
            profitLossPct = totalCost > 0 ? (profitLoss / totalCost) * 100 : 0;
        }

        holdings.push({
            scrip,
            companyName: scrip,
            sector: 'Nepse Listed',
            quantity: balance,
            wacc: waccRate,
            ltp: ltp,
            totalCost: totalCost,
            currentValue: currentValue,
            profitLoss: profitLoss,
            profitLossPct: profitLossPct,
            hasWacc: hasWacc
        });
    });

    state.holdings = holdings;
    
    // Update Dashboard & Render List
    updateDashboardUI();
    filterAndSortHoldings();
    renderHoldingsList();
    renderCharts();
    
    // Switch UI pages out of "empty state"
    document.getElementById('welcome-upload-container').classList.add('hidden');
    document.getElementById('dashboard-content').classList.remove('hidden');
    document.getElementById('bottom-nav-bar').classList.remove('hidden');
    
    // Show clear button
    document.getElementById('clear-data-btn').style.display = 'block';
    
    // Update uploader status indicator
    updateUploadStatusPills();
}

function updateUploadStatusPills() {
    const statusDiv = document.getElementById('file-status-indicator');
    statusDiv.innerHTML = `
        <div class="file-status-pill">
            <span>My Shares Portfolio CSV</span>
            <span class="status-check"><i class="status-icon">✓</i> Loaded</span>
        </div>
        <div class="file-status-pill">
            <span>WACC Purchase Report CSV</span>
            <span class="status-check"><i class="status-icon">✓</i> Loaded</span>
        </div>
    `;
}

// Portfolio Calculation & UI rendering
function updateDashboardUI() {
    let totalCost = 0;
    let totalValue = 0;
    let totalValueForPL = 0;
    let profitMakersCount = 0;
    let lossMakersCount = 0;
    let neutralCount = 0;

    state.holdings.forEach(h => {
        totalValue += h.currentValue;
        
        if (h.hasWacc) {
            totalCost += h.totalCost;
            totalValueForPL += h.currentValue;
            if (h.profitLoss > 0.01) {
                profitMakersCount++;
            } else if (h.profitLoss < -0.01) {
                lossMakersCount++;
            } else {
                neutralCount++;
            }
        } else {
            neutralCount++;
        }
    });

    const netPL = totalValueForPL - totalCost;
    const netPLPct = totalCost > 0 ? (netPL / totalCost) * 100 : 0;

    // Set Dashboard stats
    document.getElementById('stat-total-value').innerText = 'Rs. ' + formatNepali(totalValue, 2);
    document.getElementById('stat-total-cost').innerText = 'Rs. ' + formatNepali(totalCost, 2);
    
    const plElement = document.getElementById('stat-total-pl');
    const sign = netPL >= 0 ? '+' : '';
    plElement.innerText = `${sign}Rs. ${formatNepali(netPL, 2)} (${sign}${netPLPct.toFixed(2)}%)`;
    
    // Apply styling based on P&L
    const cardElement = document.getElementById('portfolio-summary-card');
    cardElement.className = 'summary-card total-value';
    plElement.className = 'summary-subtext';
    if (netPL > 0) {
        cardElement.classList.add('profit');
        plElement.classList.add('text-profit');
    } else if (netPL < 0) {
        cardElement.classList.add('loss');
        plElement.classList.add('text-loss');
    } else {
        plElement.classList.add('text-neutral');
    }

    // Set counters
    document.getElementById('counter-profit-qty').innerText = profitMakersCount;
    document.getElementById('counter-loss-qty').innerText = lossMakersCount;
    document.getElementById('counter-neutral-qty').innerText = neutralCount;
    document.getElementById('counter-total-scrips').innerHTML = `<span>${state.holdings.length} Companies</span>`;
}

// Custom Charts using SVGs
function renderCharts() {
    const pieSvg = document.getElementById('portfolio-allocation-pie');
    const plBarsContainer = document.getElementById('pl-bars-container');
    
    if (!state.holdings.length) return;

    // 1. Portfolio Allocation by Scrip Value
    let totalPortfolioVal = 0;
    state.holdings.forEach(h => {
        totalPortfolioVal += h.currentValue;
    });

    // Sort holdings by value descending
    const sortedByVal = [...state.holdings].sort((a, b) => b.currentValue - a.currentValue);
    
    // Take top 5 and group the rest into 'Others'
    const topHoldings = [];
    let othersVal = 0;
    
    sortedByVal.forEach((h, index) => {
        if (index < 5) {
            topHoldings.push({ key: h.scrip, val: h.currentValue });
        } else {
            othersVal += h.currentValue;
        }
    });
    
    if (othersVal > 0) {
        topHoldings.push({ key: 'Others', val: othersVal });
    }

    const allocationColors = [
        '#6366f1', // Indigo
        '#10b981', // Emerald
        '#06b6d4', // Cyan
        '#ec4899', // Pink
        '#f59e0b', // Amber
        '#64748b'  // Slate (Others)
    ];

    // Draw SVG Donut Chart
    let cumulativePercent = 0;
    let svgContent = '';
    const radius = 50;
    const cx = 80;
    const cy = 80;
    const strokeWidth = 14;
    const circumference = 2 * Math.PI * radius;

    topHoldings.forEach((item, index) => {
        const percent = item.val / totalPortfolioVal;
        const color = allocationColors[index] || '#64748b';
        const strokeDasharray = `${percent * circumference} ${circumference}`;
        const strokeDashoffset = -cumulativePercent * circumference;

        svgContent += `<circle 
            cx="${cx}" cy="${cy}" r="${radius}" 
            fill="transparent" 
            stroke="${color}" 
            stroke-width="${strokeWidth}" 
            stroke-dasharray="${strokeDasharray}" 
            stroke-dashoffset="${strokeDashoffset}"
            transform="rotate(-90 ${cx} ${cy})"
            class="donut-segment"
        ></circle>`;

        cumulativePercent += percent;
    });

    // Add center text
    svgContent += `
        <circle cx="${cx}" cy="${cy}" r="${radius - strokeWidth/2 - 2}" fill="#131c2e" />
        <text x="${cx}" y="${cy - 4}" text-anchor="middle" fill="#94a3b8" font-size="10" font-weight="600">PORTFOLIO</text>
        <text x="${cx}" y="${cy + 12}" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="800">Value</text>
    `;
    
    pieSvg.innerHTML = svgContent;

    // Render Donut Chart Legend
    const legendDiv = document.getElementById('pie-legend');
    legendDiv.innerHTML = topHoldings.map((item, index) => {
        const percent = (item.val / totalPortfolioVal * 100).toFixed(1);
        const color = allocationColors[index] || '#64748b';
        return `
            <div class="legend-item">
                <span class="legend-dot" style="background-color: ${color}"></span>
                <span>${item.key}: <strong>${percent}%</strong></span>
            </div>
        `;
    }).join('');

    // 2. Render P&L Horizontal Bars
    // Top 3 Profit shares & Top 3 Loss shares
    const sortedPL = [...state.holdings].sort((a, b) => b.profitLoss - a.profitLoss);
    const topProfits = sortedPL.filter(h => h.profitLoss > 0).slice(0, 3);
    const topLosses = [...sortedPL].reverse().filter(h => h.profitLoss < 0).slice(0, 3);

    let plHtml = '';

    if (topProfits.length) {
        plHtml += '<div style="margin-bottom: 12px; font-size: 13px; font-weight: 700; color: var(--success)">Top gainers</div>';
        const maxProfit = topProfits[0].profitLoss;
        topProfits.forEach(h => {
            const pct = maxProfit > 0 ? (h.profitLoss / maxProfit * 100) : 0;
            plHtml += `
                <div class="bar-chart-row">
                    <div class="bar-chart-label">
                        <span>${h.scrip}</span>
                        <span class="text-profit">+Rs. ${formatNepali(Math.round(h.profitLoss), 0)}</span>
                    </div>
                    <div class="bar-chart-track">
                        <div class="bar-chart-fill" style="width: ${pct}%; background-color: var(--success);"></div>
                    </div>
                </div>
            `;
        });
    }

    if (topLosses.length) {
        plHtml += '<div style="margin-top: 16px; margin-bottom: 12px; font-size: 13px; font-weight: 700; color: var(--danger)">Top loss makers</div>';
        const maxLoss = Math.abs(topLosses[0].profitLoss);
        topLosses.forEach(h => {
            const pct = maxLoss > 0 ? (Math.abs(h.profitLoss) / maxLoss * 100) : 0;
            plHtml += `
                <div class="bar-chart-row">
                    <div class="bar-chart-label">
                        <span>${h.scrip}</span>
                        <span class="text-loss">-Rs. ${formatNepali(Math.abs(Math.round(h.profitLoss)), 0)}</span>
                    </div>
                    <div class="bar-chart-track">
                        <div class="bar-chart-fill" style="width: ${pct}%; background-color: var(--danger);"></div>
                    </div>
                </div>
            `;
        });
    }

    if (!topProfits.length && !topLosses.length) {
        plHtml = '<div class="empty-state">No Profit or Loss data available.</div>';
    }

    plBarsContainer.innerHTML = plHtml;
}

// Filter and Sort Holdings list
function filterAndSortHoldings() {
    let result = [...state.holdings];

    // Filter by tab
    if (state.filterTab === 'profit') {
        result = result.filter(h => h.profitLoss > 0.01);
    } else if (state.filterTab === 'loss') {
        result = result.filter(h => h.profitLoss < -0.01);
    }

    // Filter by search query
    if (state.searchQuery.trim()) {
        const query = state.searchQuery.toLowerCase().trim();
        result = result.filter(h => 
            h.scrip.toLowerCase().includes(query) || 
            h.companyName.toLowerCase().includes(query) ||
            h.sector.toLowerCase().includes(query)
        );
    }

    // Sorting
    if (state.sortBy === 'pl-desc') {
        result.sort((a, b) => b.profitLoss - a.profitLoss);
    } else if (state.sortBy === 'pl-asc') {
        result.sort((a, b) => a.profitLoss - b.profitLoss);
    } else if (state.sortBy === 'value-desc') {
        result.sort((a, b) => b.currentValue - a.currentValue);
    } else if (state.sortBy === 'scrip-asc') {
        result.sort((a, b) => a.scrip.localeCompare(b.scrip));
    }

    state.filteredHoldings = result;
}

// Render the detailed holdings list UI
function renderHoldingsList() {
    const container = document.getElementById('holdings-list-container');
    container.innerHTML = '';

    if (state.filteredHoldings.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p>No companies match your filters.</p>
            </div>
        `;
        return;
    }

    state.filteredHoldings.forEach(h => {
        const plSign = h.hasWacc && h.profitLoss >= 0 ? '+' : '';
        const plClass = h.hasWacc ? (h.profitLoss > 0.01 ? 'profit' : (h.profitLoss < -0.01 ? 'loss' : 'neutral')) : 'neutral';
        const textClass = h.hasWacc ? (h.profitLoss > 0.01 ? 'text-profit' : (h.profitLoss < -0.01 ? 'text-loss' : 'text-neutral')) : 'text-neutral';

        const card = document.createElement('div');
        card.className = 'holding-card';
        card.onclick = () => openScripDrawer(h);

        card.innerHTML = `
            <div class="holding-header">
                <div class="holding-scrip-info">
                    <span class="holding-symbol">${h.scrip}</span>
                    <div class="scrip-meta">
                        <span class="meta-badge">${h.sector}</span>
                    </div>
                </div>
                <div class="holding-pl-badge ${plClass}">
                    <span>${h.hasWacc ? plSign + h.profitLossPct.toFixed(2) + '%' : 'N/A'}</span>
                </div>
            </div>
            
            <div class="holding-details-grid">
                <div class="detail-item">
                    <span class="detail-label">Qty</span>
                    <span class="detail-value">${formatNepali(h.quantity, 0)}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Avg Buy Price</span>
                    <span class="detail-value">${h.hasWacc ? 'Rs. ' + formatNepali(h.wacc, 2) : 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Current Price</span>
                    <span class="detail-value" style="display: flex; align-items: center; gap: 4px;">
                        Rs. ${formatNepali(h.ltp, 2)}
                        ${h.hasWacc ? (h.ltp > h.wacc ? '<span style="color:var(--success); font-size:10px;" title="Current price is above purchase cost">▲</span>' : (h.ltp < h.wacc ? '<span style="color:var(--danger); font-size:10px;" title="Current price is below purchase cost">▼</span>' : '')) : ''}
                    </span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Total Cost</span>
                    <span class="detail-value">${h.hasWacc ? 'Rs. ' + formatNepali(Math.round(h.totalCost), 0) : 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Current Value</span>
                    <span class="detail-value">Rs. ${formatNepali(Math.round(h.currentValue), 0)}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Net Gain/Loss</span>
                    <span class="detail-value ${textClass}">${h.hasWacc ? plSign + 'Rs. ' + formatNepali(Math.round(h.profitLoss), 0) : 'N/A'}</span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Drawer Drawer Modal Management & NEPSE Sell Commission formulas
function openScripDrawer(holding) {
    state.selectedScrip = holding;
    
    // Populate drawer values
    document.getElementById('drawer-scrip-title').innerText = holding.scrip;
    document.getElementById('drawer-scrip-sector').innerText = holding.sector;
    document.getElementById('drawer-scrip-company').innerText = holding.companyName;

    // Overview numbers in drawer
    document.getElementById('drawer-total-qty').innerText = formatNepali(holding.quantity, 0);
    document.getElementById('drawer-avg-cost').innerText = holding.hasWacc ? 'Rs. ' + formatNepali(holding.wacc, 2) : 'N/A';
    document.getElementById('drawer-ltp').innerText = 'Rs. ' + formatNepali(holding.ltp, 2);
    document.getElementById('drawer-cost').innerText = holding.hasWacc ? 'Rs. ' + formatNepali(Math.round(holding.totalCost), 0) : 'N/A';
    document.getElementById('drawer-value').innerText = 'Rs. ' + formatNepali(Math.round(holding.currentValue), 0);
    
    const plSign = holding.hasWacc && holding.profitLoss >= 0 ? '+' : '';
    const plText = document.getElementById('drawer-pl');
    if (holding.hasWacc) {
        plText.innerText = `${plSign}Rs. ${formatNepali(Math.round(holding.profitLoss), 0)} (${plSign}${holding.profitLossPct.toFixed(2)}%)`;
        plText.className = holding.profitLoss > 0.01 ? 'text-profit' : (holding.profitLoss < -0.01 ? 'text-loss' : 'text-neutral');
    } else {
        plText.innerText = 'N/A';
        plText.className = 'text-neutral';
    }

    // Preset values for Sell Simulator
    document.getElementById('calc-input-qty').value = holding.quantity;
    document.getElementById('calc-input-price').value = holding.ltp;
    
    state.sellSim.qty = holding.quantity;
    state.sellSim.price = holding.ltp;
    state.sellSim.cgtRate = 0.05; // Reset default to 5% (long-term)

    // Set default active CGT button styling
    document.getElementById('cgt-5').classList.add('active');
    document.getElementById('cgt-75').classList.remove('active');

    // Run selling calculations
    runSellingCalculator();

    // Show Drawer Modal
    document.getElementById('drawer-modal').classList.add('active');
}

function closeScripDrawer() {
    document.getElementById('drawer-modal').classList.remove('active');
    state.selectedScrip = null;
}

// NEPSE Sell Commission & Capital Gains Tax calculator
function runSellingCalculator() {
    const holding = state.selectedScrip;
    if (!holding) return;

    const sellPrice = parseFloat(document.getElementById('calc-input-price').value) || 0;
    const sellQty = parseFloat(document.getElementById('calc-input-qty').value) || 0;
    const cgtRate = state.sellSim.cgtRate;

    const grossAmount = sellPrice * sellQty;

    // NEPSE Commission brackets (selling or buying)
    // Up to 50k: 0.40%
    // 50k to 500k: 0.37%
    // 500k to 20L: 0.34%
    // 20L to 1Cr: 0.30%
    // Above 1Cr: 0.27%
    // Min commission = Rs 10
    let commissionRate = 0.004;
    if (grossAmount > 10000000) {
        commissionRate = 0.0027;
    } else if (grossAmount > 2000000) {
        commissionRate = 0.003;
    } else if (grossAmount > 500000) {
        commissionRate = 0.0034;
    } else if (grossAmount > 50000) {
        commissionRate = 0.0037;
    }

    let commission = grossAmount * commissionRate;
    if (grossAmount > 0 && commission < 10) {
        commission = 10;
    }

    // SEBON regulation fee: 0.015%
    const sebonFee = grossAmount * 0.00015;

    // DP fee (CDSC DP Charge): Rs. 25 flat per scrip transfer
    const dpFee = grossAmount > 0 ? 25 : 0;

    // Total expenses
    const totalExpenses = commission + sebonFee + dpFee;
    const totalReceivableBeforeCGT = grossAmount - totalExpenses;

    // Cost calculation (WACC * quantity)
    const costForSoldQty = holding.hasWacc ? holding.wacc * sellQty : 0;

    // Profit calculation for Capital Gains Tax (CGT)
    const profitForTax = totalReceivableBeforeCGT - costForSoldQty;

    // CGT applies only on profit (Net profit > 0)
    const cgt = (holding.hasWacc && profitForTax > 0) ? profitForTax * cgtRate : 0;

    const netReceivable = totalReceivableBeforeCGT - cgt;
    const netProfitLoss = holding.hasWacc ? (netReceivable - costForSoldQty) : 0;

    // Update UI numbers
    document.getElementById('calc-gross').innerText = 'Rs. ' + formatNepali(grossAmount, 2);
    document.getElementById('calc-commission').innerText = 'Rs. ' + formatNepali(commission, 2);
    document.getElementById('calc-sebon').innerText = 'Rs. ' + formatNepali(sebonFee, 2);
    document.getElementById('calc-dp').innerText = 'Rs. ' + formatNepali(dpFee, 2);
    document.getElementById('calc-cgt').innerText = holding.hasWacc ? 'Rs. ' + formatNepali(cgt, 2) : 'N/A';
    
    const netProfitElement = document.getElementById('calc-net-profit');
    if (holding.hasWacc) {
        const plSign = netProfitLoss >= 0 ? '+' : '';
        netProfitElement.innerText = `${plSign}Rs. ${formatNepali(netProfitLoss, 2)} (${((netProfitLoss / (costForSoldQty || 1)) * 100).toFixed(2)}%)`;
        netProfitElement.className = netProfitLoss > 0.01 ? 'text-profit' : (netProfitLoss < -0.01 ? 'text-loss' : 'text-neutral');
    } else {
        netProfitElement.innerText = 'N/A';
        netProfitElement.className = 'text-neutral';
    }
}

// Nav Page routing
function switchTab(tabId) {
    state.currentTab = tabId;
    
    // Update nav items UI
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Show/hide sections
    if (tabId === 'dashboard') {
        document.getElementById('dashboard-view').classList.remove('hidden');
        document.getElementById('holdings-view').classList.add('hidden');
    } else if (tabId === 'holdings') {
        document.getElementById('dashboard-view').classList.add('hidden');
        document.getElementById('holdings-view').classList.remove('hidden');
    }
}

// Filter tab switching
function switchFilterTab(btn, filterValue) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.filterTab = filterValue;
    filterAndSortHoldings();
    renderHoldingsList();
}

// File reading handler
function handleFileSelect(file, fileType) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        if (fileType === 'shares') {
            state.mySharesRaw = text;
            localStorage.setItem('nepse_my_shares_raw', text);
        } else if (fileType === 'wacc') {
            state.waccRaw = text;
            localStorage.setItem('nepse_wacc_raw', text);
        }
        
        // Update raw upload statuses
        updateLandingStatus();
        
        // If both are ready, merge immediately
        if (state.mySharesRaw && state.waccRaw) {
            processData();
        }
    };
    reader.readAsText(file);
}

async function loadDefaultFolderData() {
    try {
        const responseShares = await fetch('Share%20Data/My%20Shares%20Values.csv');
        const responseWacc = await fetch('Share%20Data/WACC%20Report-%20Current%20Companies.csv');
        
        if (responseShares.ok && responseWacc.ok) {
            state.mySharesRaw = await responseShares.text();
            state.waccRaw = await responseWacc.text();
            processData();
            return true;
        }
    } catch (err) {
        console.warn('Failed to fetch local folder CSV files.', err);
    }
    return false;
}

function updateLandingStatus() {
    const sharesStatus = document.getElementById('status-shares');
    const waccStatus = document.getElementById('status-wacc');

    if (state.mySharesRaw) {
        sharesStatus.innerHTML = '<span class="status-check">✓ Loaded</span>';
    } else {
        sharesStatus.innerHTML = '<span class="status-missing">Pending</span>';
    }

    if (state.waccRaw) {
        waccStatus.innerHTML = '<span class="status-check">✓ Loaded</span>';
    } else {
        waccStatus.innerHTML = '<span class="status-missing">Pending</span>';
    }
}

// Initialization and Event Listeners setup
function initApp() {
    // Check local storage for persistent data (custom user overrides)
    const savedShares = localStorage.getItem('nepse_my_shares_raw');
    const savedWacc = localStorage.getItem('nepse_wacc_raw');
    
    if (savedShares && savedWacc) {
        state.mySharesRaw = savedShares;
        state.waccRaw = savedWacc;
        updateLandingStatus();
        processData();
    } else {
        // Fallback to loading the default CSV files from the local directory
        loadDefaultFolderData().then(loaded => {
            if (!loaded) {
                updateLandingStatus();
                // If loading local files fails, display uploader so user is not stuck on an empty screen
                document.getElementById('welcome-upload-container').classList.remove('hidden');
                document.getElementById('dashboard-content').classList.add('hidden');
                document.getElementById('bottom-nav-bar').classList.add('hidden');
            }
        });
    }

    // Clear Data trigger - resets back to default folder CSVs
    document.getElementById('clear-data-btn').addEventListener('click', () => {
        if (confirm("Reset custom uploads and load default portfolio files from the local directory?")) {
            localStorage.removeItem('nepse_my_shares_raw');
            localStorage.removeItem('nepse_wacc_raw');
            state.mySharesRaw = null;
            state.waccRaw = null;
            state.holdings = [];
            state.filteredHoldings = [];
            
            loadDefaultFolderData().then(loaded => {
                if (loaded) {
                    alert("Reset successful: Custom uploads cleared and default folder CSV files reloaded.");
                } else {
                    document.getElementById('welcome-upload-container').classList.remove('hidden');
                    document.getElementById('dashboard-content').classList.add('hidden');
                    document.getElementById('bottom-nav-bar').classList.add('hidden');
                    document.getElementById('clear-data-btn').style.display = 'none';
                    updateLandingStatus();
                    alert("Custom uploads cleared. Default folder files could not be fetched. Please upload CSVs manually.");
                }
            });
        }
    });

    // Update Reports trigger
    document.getElementById('update-files-btn').addEventListener('click', () => {
        document.getElementById('welcome-upload-container').classList.remove('hidden');
        document.getElementById('dashboard-content').classList.add('hidden');
        document.getElementById('bottom-nav-bar').classList.add('hidden');
    });

    // Close Uploader trigger
    document.getElementById('close-uploader-btn').addEventListener('click', () => {
        if (state.mySharesRaw && state.waccRaw) {
            document.getElementById('welcome-upload-container').classList.add('hidden');
            document.getElementById('dashboard-content').classList.remove('hidden');
            document.getElementById('bottom-nav-bar').classList.remove('hidden');
        } else {
            alert("Please upload your portfolio CSV files first.");
        }
    });

    // File Drag & Drop + Input setup
    const fileSharesInput = document.getElementById('file-shares');
    const fileWaccInput = document.getElementById('file-wacc');

    fileSharesInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFileSelect(e.target.files[0], 'shares');
    });

    fileWaccInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFileSelect(e.target.files[0], 'wacc');
    });

    // Dropzone triggers
    const sharesDropzone = document.getElementById('shares-dropzone');
    const waccDropzone = document.getElementById('wacc-dropzone');

    ['dragenter', 'dragover'].forEach(eventName => {
        sharesDropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            sharesDropzone.classList.add('dragover');
        }, false);
        waccDropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            waccDropzone.classList.add('dragover');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        sharesDropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            sharesDropzone.classList.remove('dragover');
        }, false);
        waccDropzone.addEventListener(eventName, (e) => {
            e.preventDefault();
            waccDropzone.classList.remove('dragover');
        }, false);
    });

    sharesDropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length) handleFileSelect(files[0], 'shares');
    });

    waccDropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length) handleFileSelect(files[0], 'wacc');
    });

    // Navigation Menu tabs click
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.getAttribute('data-tab'));
        });
    });

    // Holdings Filter Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filterTab = btn.getAttribute('data-filter');
            filterAndSortHoldings();
            renderHoldingsList();
        });
    });

    // Holdings search filter with Clear Button toggle QoL
    const searchInput = document.getElementById('holdings-search');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery.trim()) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        filterAndSortHoldings();
        renderHoldingsList();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        filterAndSortHoldings();
        renderHoldingsList();
        searchInput.focus();
    });

    // Holdings sorting drop down
    document.getElementById('sort-filter').addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        filterAndSortHoldings();
        renderHoldingsList();
    });

    // Scroll to Top FAB QoL
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Modal drawer close triggers
    document.getElementById('close-drawer').addEventListener('click', closeScripDrawer);
    document.getElementById('drawer-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('drawer-modal')) {
            closeScripDrawer();
        }
    });

    // Sell Calculator fields change listeners
    document.getElementById('calc-input-price').addEventListener('input', runSellingCalculator);
    document.getElementById('calc-input-qty').addEventListener('input', runSellingCalculator);

    // CGT Toggle buttons
    document.getElementById('cgt-5').addEventListener('click', () => {
        document.getElementById('cgt-5').classList.add('active');
        document.getElementById('cgt-75').classList.remove('active');
        state.sellSim.cgtRate = 0.05;
        runSellingCalculator();
    });

    // CGT Toggle buttons
    document.getElementById('cgt-75').addEventListener('click', () => {
        document.getElementById('cgt-75').classList.add('active');
        document.getElementById('cgt-5').classList.remove('active');
        state.sellSim.cgtRate = 0.075;
        runSellingCalculator();
    });
}

// Attach listeners safely
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
