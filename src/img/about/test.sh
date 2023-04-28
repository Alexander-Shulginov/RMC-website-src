
#!/bin/bash

# Путь до исходной папки с изображениями
input_dir="."

# Путь до выходной папки для обработанных изображений
output_dir="."

# Формат выходных изображений (по умолчанию "webp")
format="${1:-webp}"

# Качество сжатия (по умолчанию "90")
quality="${2:-90}"

# Префиксы для файлов разных размеров
prefix_2x="@2x"
prefix_3x="@3x"

# Используем команду find для поиска всех файлов с заданными расширениями в директории и её поддиректориях
find "$input_dir" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | while read file; do
  # Получаем имя файла без расширения
  filename=$(basename -- "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"

  # Получаем относительный путь до файла от начальной директории
  relative_path="${file#$input_dir/}"

  # Путь до файла в выходной директории
  output_file="$output_dir/$relative_path.$format"

  # Создаем выходную директорию, если её нет
  mkdir -p "$(dirname "$output_file")"

  # Конвертация и сжатие изображения
  convert "$file" \
    -resize 100% \
    -quality "$quality" \
    "$output_file"

  # Создание увеличенных копий изображений и добавление префиксов
  convert "$file" \
    -resize 200% \
    -quality "$quality" \
    "$output_dir/${relative_path%.*}$prefix_2x.$format"

  convert "$file" \
    -resize 300% \
    -quality "$quality" \
    "$output_dir/${relative_path%.*}$prefix_3x.$format"
done
