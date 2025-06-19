function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i]; // Get each object properly
    const { category, price } = transaction;

    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  // Convert map to array of { category, totalSpent }
  return Object.entries(categoryMap).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;
