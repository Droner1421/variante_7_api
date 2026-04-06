import requests
import random
from datetime import datetime, timedelta

# Base URL
BASE_URL = "http://localhost:3000/api/formulario"

# Listas de nombres y tipos de evaluaciones
NOMBRES = [
    "Sofía", "Carlos", "María", "Juan", "Ana", "Luis", "Laura", "Diego", "Carmen", "Pedro",
    "Rosa", "Miguel", "Isabel", "Francisco", "Elena", "Antonio", "Dolores", "Manuel", "Teresa", "José",
    "Francisca", "Eduardo", "Rosario", "Andrés", "Magdalena", "Fernando", "Concepción", "Álvaro", "Asunción", "Claudio",
    "Matilde", "Guillermo", "Natividad", "Enrique", "Adoración", "Ramón", "Aurora", "Salvador", "Bendita", "Mariano",
    "Fatima", "Jaime", "Gloria", "Alfredo", "Verónica", "Roberto", "Ángela", "Ricardo", "Esperanza", "Arturo",
    "Esperanza", "Víctor", "Corina", "Héctor", "Beatriz", "Oscar", "Consuelo", "Ernesto", "Remedios", "Ángel",
    "Milagros", "Raúl", "Amparo", "Feliciano", "Celeste", "Joaquín", "Blanca", "Primitivo", "Azucena", "Teodoro",
    "Lilia", "Emilio", "Dalia", "Nemesio", "Camelia", "Cesáreo", "Hortensia", "Apolinar", "Iris", "Benilson"
]

EVALUACIONES = [
    "Examen Parcial", "Examen Final", "Quiz 1", "Quiz 2", "Quiz 3",
    "Evaluación Continua", "Prueba de Unidad", "Test Diagnóstico", "Trabajo Práctico", "Proyecto Final",
    "Presentación Oral", "Ensayo", "Caso de Estudio", "Simulacro", "Evaluación Diagnostica"
]

GRUPOS = ["A", "B", "C", "D", "E", "F", "G", "H"]

def generar_estudiantes(cantidad=1000):
    """Genera estudiantes"""
    print(f"Generando {cantidad} estudiantes...")
    for i in range(cantidad):
        nombre = random.choice(NOMBRES)
        grupo = random.choice(GRUPOS)
        
        data = {
            "nombre": f"{nombre} {i+1}",
            "grupo": grupo
        }
        
        try:
            response = requests.post(f"{BASE_URL}/Estudiante", json=data)
            if response.status_code == 201:
                if (i + 1) % 100 == 0:
                    print(f"  ✓ {i + 1} estudiantes creados")
            else:
                print(f"  ✗ Error al crear estudiante {i+1}: {response.status_code}")
        except Exception as e:
            print(f"  ✗ Error en estudiante {i+1}: {str(e)}")
    
    print(f" {cantidad} estudiantes generados\n")

def generar_evaluaciones(cantidad=100):
    """Genera evaluaciones"""
    print(f" Generando {cantidad} evaluaciones...")
    base_date = datetime(2025, 1, 1)
    
    for i in range(cantidad):
        titulo = random.choice(EVALUACIONES)
        # Generar fechas entre enero y diciembre 2025
        fecha = base_date + timedelta(days=random.randint(0, 365))
        
        data = {
            "titulo": f"{titulo} - {i+1}",
            "fecha": fecha.strftime("%Y-%m-%d")
        }
        
        try:
            response = requests.post(f"{BASE_URL}/Evaluacion", json=data)
            if response.status_code == 201:
                if (i + 1) % 10 == 0:
                    print(f"  ✓ {i + 1} evaluaciones creadas")
            else:
                print(f"  ✗ Error al crear evaluación {i+1}: {response.status_code}")
        except Exception as e:
            print(f"  ✗ Error en evaluación {i+1}: {str(e)}")
    
    print(f" {cantidad} evaluaciones generadas\n")

def generar_calificaciones(cantidad_estudiantes=1000, cantidad_evaluaciones=100, cantidad_calificaciones=1000):
    """Genera calificaciones"""
    print(f" Generando {cantidad_calificaciones} calificaciones...")
    
    for i in range(cantidad_calificaciones):
        estudiante_id = random.randint(1, cantidad_estudiantes)
        evaluacion_id = random.randint(1, cantidad_evaluaciones)
        calificacion = random.randint(60, 100)
        
        data = {
            "estudiante_id": estudiante_id,
            "evaluacion_id": evaluacion_id,
            "calificacion": calificacion
        }
        
        try:
            response = requests.post(f"{BASE_URL}/Calificacion", json=data)
            if response.status_code == 201:
                if (i + 1) % 100 == 0:
                    print(f"  ✓ {i + 1} calificaciones creadas")
            else:
                print(f"  ✗ Error al crear calificación {i+1}: {response.status_code}")
        except Exception as e:
            print(f"  ✗ Error en calificación {i+1}: {str(e)}")
    
    print(f" {cantidad_calificaciones} calificaciones generadas\n")

def verificar_datos():
    """Verifica los datos creados"""
    print(" Verificando datos creados...")
    try:
        resp_est = requests.get(f"{BASE_URL}/Estudiante")
        resp_eval = requests.get(f"{BASE_URL}/Evaluacion")
        resp_calif = requests.get(f"{BASE_URL}/Calificacion")
        
        estudiantes = len(resp_est.json()) if resp_est.status_code == 200 else 0
        evaluaciones = len(resp_eval.json()) if resp_eval.status_code == 200 else 0
        calificaciones = len(resp_calif.json()) if resp_calif.status_code == 200 else 0
        
        print(f"\n RESUMEN FINAL:")
        print(f"  • Estudiantes: {estudiantes}")
        print(f"  • Evaluaciones: {evaluaciones}")
        print(f"  • Calificaciones: {calificaciones}")
    except Exception as e:
        print(f" Error verificando datos: {str(e)}")

if __name__ == "__main__":
    print(" Iniciando carga de datos en el API...\n")
    
    try:
        # Generar datos
        generar_estudiantes(1000)
        generar_evaluaciones(100)
        generar_calificaciones(1000, 100, 1000)
        
        # Verificar
        verificar_datos()
        
        print("\n ¡Proceso completado!")
    except Exception as e:
        print(f"\n Error: {str(e)}")
