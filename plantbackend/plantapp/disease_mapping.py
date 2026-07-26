CLASS_NAMES = [
    "bacterial_spot",
    "early_blight",
    "healthy",
    "late_blight",
    "leaf_mold",
    "mosaic_virus",
    "septoria_leaf_spot",
    "target_spot",
    "twospotted_spider_mite",
    "yellow_leaf_curl_virus"
]

disease_mapping = {i: name for i, name in enumerate(CLASS_NAMES)}