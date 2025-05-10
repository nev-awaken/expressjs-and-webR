add_numbers <- function(a, b) {
  return(a + b)
}

summary_stats <- function(x) {
  return(c(mean = mean(x), sd = sd(x), min = min(x), max = max(x)))
}

run_t_test <- function(x, y) {
  return(t.test(x, y)$p.value)
}

run_pca <- function(data_matrix) {
  pca <- prcomp(data_matrix, scale. = TRUE)
  pcs <- as.data.frame(pca$x)
  return(unname(pcs[, 1:min(2, ncol(pcs))]))
}


run_kmeans <- function(data_matrix, k) {
  km <- kmeans(data_matrix, centers = k)
  return(km$cluster)
}

run_hw_forecast <- function(ts_values, horizon = 5) {
  ts_data <- ts(ts_values, frequency = 1)  # key fix here
  model <- HoltWinters(ts_data, beta = FALSE, gamma = FALSE)  # force simple exponential smoothing
  preds <- predict(model, n.ahead = horizon)
  return(as.numeric(preds))
}




