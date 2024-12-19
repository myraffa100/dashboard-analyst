// Dataset Penjualan Tokopedia
const salesData = [
  { year: 2020, totalSales: 500000000, category: "Elektronik", orders: 2000 },
  { year: 2021, totalSales: 750000000, category: "Fashion", orders: 3000 },
  { year: 2022, totalSales: 1200000000, category: "Kecantikan", orders: 4500 },
  { year: 2023, totalSales: 1500000000, category: "Rumah Tangga", orders: 6000 },
];

// Render Table
const tableBody = document.querySelector("#salesTable tbody");
salesData.forEach((row) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.year}</td>
    <td>Rp ${row.totalSales.toLocaleString()}</td>
    <td>${row.category}</td>
    <td>${row.orders}</td>
  `;
  tableBody.appendChild(tr);
});

// Data untuk Chart
const years = salesData.map((item) => item.year);
const totalSales = salesData.map((item) => item.totalSales);
const totalOrders = salesData.map((item) => item.orders);

// Chart Penjualan Per Tahun
const ctx = document.getElementById("annualSalesChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: years,
    datasets: [
      {
        label: "Total Penjualan (Rp)",
        data: totalSales,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Jumlah Pesanan",
        data: totalOrders,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Nilai",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
