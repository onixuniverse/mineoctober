import json
import os

def process_json_file(input_file, output_dir="output"):
    """
    Читает JSON файл, обрабатывает строки вида "tip.tipsmod.welcome.text"
    и создает соответствующие файлы с преобразованным содержимым.
    
    Args:
        input_file (str): Путь к входному JSON файлу
        output_dir (str): Директория для сохранения результатов
    """
    
    # Создаем директорию для выходных файлов, если она не существует
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    try:
        # Читаем JSON файл
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Обрабатываем каждую пару ключ-значение в JSON
        for key, value in data.items():
            if isinstance(value, str) and key.startswith("tip.tipsmod.") and key.endswith(".text"):
                # Извлекаем название из строки вида "tip.tipsmod.welcome.text"
                parts = key.split('.')
                if len(parts) >= 3:
                    filename = parts[2]  # Извлекаем "welcome"
                    
                    # Создаем структуру для нового JSON
                    new_data = {
                        "tip": {
                            "translate": f"tip.tipsmod.{filename}"
                        }
                    }
                    
                    # Формируем путь к выходному файлу
                    output_file = os.path.join(output_dir, f"{filename}.json")
                    
                    # Записываем результат в файл
                    with open(output_file, 'w', encoding='utf-8') as f:
                        json.dump(new_data, f, indent=2, ensure_ascii=False)
                    
                    print(f"Создан файл: {output_file}")
    
    except FileNotFoundError:
        print(f"Ошибка: Файл {input_file} не найден")
    except json.JSONDecodeError:
        print(f"Ошибка: Файл {input_file} содержит некорректный JSON")
    except Exception as e:
        print(f"Произошла ошибка: {e}")

def main():
    # Настройки
    input_filename = "lang/ru_ru.json"  # Замените на путь к вашему файлу
    output_directory = "tips"    # Директория для результатов
    
    # Запускаем обработку
    process_json_file(input_filename, output_directory)
    print("Обработка завершена!")

if __name__ == "__main__":
    main()