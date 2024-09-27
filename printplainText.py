import os

def print_files_in_directory(directory):
    # Define the file extensions to scan
    valid_extensions = {'.tsx', '.jsx', '.ts'}
    
    # Walk through the directory recursively
    for root, _, files in os.walk(directory):
        for filename in files:
            # Check if the file has a valid extension
            if any(filename.endswith(ext) for ext in valid_extensions):
                # Construct the full file path
                filepath = os.path.join(root, filename)
                
                # Print the file path
                print(f"{filepath}")
                
                try:
                    # Open and read the file content
                    with open(filepath, 'r', encoding='utf-8') as file:
                        content = file.read()
                        print("```\n" + content + "\n```")
                except UnicodeDecodeError:
                    # Skip files that cannot be decoded
                    print("Skipped: Unable to decode this file.")

# Specify the directory containing the Python script
current_directory = os.path.dirname(os.path.abspath(__file__))

# Call the function to print files in the current directory and subdirectories
print_files_in_directory(current_directory)
