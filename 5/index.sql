WITH total_revenue_all_products AS (
  SELECT SUM(sale_amount) AS total
  FROM products
)
SELECT category, SUM(sale_amount) AS total_revenue, total
FROM products, total_revenue_all_products
GROUP BY category, total
ORDER BY total_revenue DESC;
