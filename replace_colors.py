import sys

def replace_in_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

replace_in_file('components/Navbar.tsx', [
    ('hover:text-[#F97316]', 'hover:text-black'),
    ('focus:border-[#F97316]', 'focus:border-black'),
    ('focus:ring-[#F97316]', 'focus:ring-black'),
    ('bg-[#F97316] hover:bg-[#EA580C]', 'bg-black hover:bg-gray-800'),
    ('text-[#F97316]', 'text-gray-500')
])

replace_in_file('components/Footer.tsx', [
    ('hover:text-[#F97316]', 'hover:text-black'),
    ('text-[#F97316]', 'text-gray-500')
])
