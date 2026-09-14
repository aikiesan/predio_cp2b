from pathlib import Path
from PIL import Image


REPO = Path(__file__).resolve().parents[1]
SOURCE = REPO.parent
CONCEPTS = SOURCE / "03_Ambientes_Conceitos-20260913T113741Z-1-001" / "03_Ambientes_Conceitos"
NEW = CONCEPTS / "Novos_Conceitos_Para_Aprovacao"
OUTPUT = SOURCE / "output" / "imagegen"

PLAN_DIR = REPO / "assets" / "plans"
CONCEPT_DIR = REPO / "assets" / "concepts"
PHOTO_DIR = REPO / "assets" / "photos"
PLAN_DIR.mkdir(parents=True, exist_ok=True)
CONCEPT_DIR.mkdir(parents=True, exist_ok=True)
PHOTO_DIR.mkdir(parents=True, exist_ok=True)


def export_webp(source: Path, target_name: str, max_size=(1800, 1200)) -> None:
    if not source.exists():
        raise FileNotFoundError(source)
    with Image.open(source) as image:
        image = image.convert("RGB")
        image.thumbnail(max_size, Image.Resampling.LANCZOS)
        image.save(CONCEPT_DIR / target_name, "WEBP", quality=86, method=6)


def export_photo(source: Path, target_name: str, max_size=(1200, 900)) -> None:
    if not source.exists():
        raise FileNotFoundError(source)
    with Image.open(source) as image:
        from PIL import ImageOps
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail(max_size, Image.Resampling.LANCZOS)
        image.save(PHOTO_DIR / target_name, "WEBP", quality=80, method=6)


plans = {
    "terreo.png": SOURCE / "tmp" / "floorplan-inspection" / "prancha_01.png",
    "primeiro-pavimento.png": SOURCE / "tmp" / "floorplan-inspection" / "prancha_02.png",
    "segundo-pavimento.png": SOURCE / "tmp" / "floorplan-inspection" / "prancha_03.png",
}
for name, source in plans.items():
    with Image.open(source) as image:
        image.save(PLAN_DIR / name, optimize=True)


lab_root = NEW / "01_Laboratorios_e_Almoxarifado"
halls_root = NEW / "02_Halls_e_Escada"
approval_root = NEW / "03_Conceitos_Existentes_Para_Aprovacao"
cafe_root = NEW / "04_Cafe_e_Entrada"

assets = {
    "lab-analitica-01.webp": CONCEPTS / "Laboratórios" / "05_lab_analitica_01_concept.png",
    "lab-estufa-mufla.webp": CONCEPTS / "Laboratórios" / "21_lab_estufa_mufla_real_photo_concept_v1.png",
    "lab-reatores.webp": approval_root / "22_lab_reatores_real_photo_concept_v1.png",
    "lab-fq-01.webp": OUTPUT / "24_lab_fisico_quimico_1andar_IMG_8703_concept_v1.png",
    "lab-fq-02.webp": approval_root / "23_lab_fisico_quimico_02_real_photo_concept_v1.png",
    "corredor.webp": CONCEPTS / "01_corridor_world_biogas_concept.png",
    "hall-superior.webp": CONCEPTS / "03_upper_hall_collaboration_hub.png",
    "auditorio-01.webp": OUTPUT / "06_auditorium_concept.png",
    "auditorio-02.webp": approval_root / "26_auditorium_IMG_8715_corrected_review_v1.png",
    "reuniao-01.webp": CONCEPTS / "Sala de Reunião" / "10_meeting_room_01_concept_v1.png",
    "reuniao-02.webp": approval_root / "11_meeting_room_02_concept_v1.png",
    "coordenacao.webp": CONCEPTS / "Escritorio_Bruna_Renata" / "02_coordinator_office_concept.png",
    "escritorio-bruna.webp": CONCEPTS / "Escritorio_Bruna_Renata" / "12_bruna_office_concept_v1.png",
    "escritorio-renata.webp": OUTPUT / "13_renata_office_concept_v1.png",
    "escritorio-pq.webp": CONCEPTS / "Escritorio_PQs" / "ESCOLHIDA_ESCRITORIOS_PQ (13).png",
    "cowork-01a.webp": OUTPUT / "07_compact_coworking_concept.png",
    "cowork-01b.webp": OUTPUT / "07_compact_coworking_concept_v2_rotated.png",
    "cowork-01c.webp": CONCEPTS / "Coworking" / "07_compact_coworking_concept_v3_no_visible_door.png",
    "cowork-02.webp": CONCEPTS / "Coworking" / "14_cowork_02_concept_v1.png",
    "cowork-03.webp": CONCEPTS / "Coworking" / "15_cowork_03_concept_v1.png",
    "descompressao-01.webp": OUTPUT / "16_decompression_room_concept_v1.png",
    "descompressao-02.webp": OUTPUT / "16_decompression_room_concept_v2_puffs.png",
    "descompressao-03.webp": CONCEPTS / "Sala_Descompressão" / "16_decompression_room_concept_v3_puffs_curtain_gaming.png",
    "cafe-original.webp": CONCEPTS / "08_coffee_social_point_concept.png",
    "entrada-original.webp": CONCEPTS / "09_main_entrance_concept.png",
}


def add_folder(prefix: str, folder: Path) -> None:
    for index, source in enumerate(sorted(folder.glob("*.png")), start=1):
        assets[f"{prefix}-{index:02d}.webp"] = source


add_folder("lab-analitica-02", lab_root / "Lab_Analitica_02_IMG_8703")
add_folder("lab-analitica-tecnico", lab_root / "Lab_Analitica_e_Tecnico_4_Opcoes")
add_folder("almoxarifado", lab_root / "Almoxarifado_4_Opcoes")
add_folder("hall-terreo", halls_root / "Hall_Recepcao_Terreo_IMG_8733_4_Opcoes")
add_folder("lobby-elevador", halls_root / "Lobby_Elevador_IMG_8734_4_Opcoes")
add_folder("cafe", cafe_root / "Cafe_IMG_8708_4_Opcoes")
add_folder("entrada", cafe_root / "Entrada_Principal_IMG_8741_4_Opcoes")

for name, source in assets.items():
    export_webp(source, name)

ORIGINAL_PHOTOS = SOURCE / "02_Fotos_do_Predio"
LUCAS_PHOTOS = SOURCE / "Fotos_do_Predio_Lucas_Nakamura"

photos = {
    "entrada-img8741.webp": ORIGINAL_PHOTOS / "IMG_8741.JPG",
    "hall-img8733.webp": ORIGINAL_PHOTOS / "IMG_8733.JPG",
    "lobby-img8734.webp": ORIGINAL_PHOTOS / "IMG_8734.JPG",
    "cafe-img8708.webp": ORIGINAL_PHOTOS / "IMG_8708.JPG",
    "auditorio-img8715.webp": ORIGINAL_PHOTOS / "IMG_8715.JPG",
    "escritorio-img8718.webp": ORIGINAL_PHOTOS / "IMG_8718.JPG",
    "escritorio-img8719.webp": ORIGINAL_PHOTOS / "IMG_8719.JPG",
    "corredor-img8725.webp": ORIGINAL_PHOTOS / "IMG_8725.JPG",
    "corredor-img8727.webp": ORIGINAL_PHOTOS / "IMG_8727.JPG",
    "lab-img8703.webp": ORIGINAL_PHOTOS / "IMG_8703.JPG",
    "lab-img8705.webp": ORIGINAL_PHOTOS / "IMG_8705.JPG",
    "hall-escada-20250806.webp": LUCAS_PHOTOS / "20250806_151100.jpg",
    "corredor-20250806.webp": LUCAS_PHOTOS / "20250806_151120.jpg",
    "sala-vazia-01.webp": LUCAS_PHOTOS / "20250806_152019.jpg",
    "sala-vazia-02.webp": LUCAS_PHOTOS / "20250806_154529.jpg",
    "lab-visita-01.webp": LUCAS_PHOTOS / "20260430_133353.jpg",
    "lab-visita-02.webp": LUCAS_PHOTOS / "20260430_133356.jpg",
    "fachada-01.webp": LUCAS_PHOTOS / "20260521_123513.jpg",
    "fachada-02.webp": LUCAS_PHOTOS / "20260521_123516.jpg",
    "placa-cp2b.webp": LUCAS_PHOTOS / "20260806_100755.jpg",
    "recepcao-visita-01.webp": LUCAS_PHOTOS / "20260902_101413.jpg",
    "recepcao-visita-02.webp": LUCAS_PHOTOS / "20260902_101419.jpg",
    "lab-operacao-01.webp": LUCAS_PHOTOS / "20260902_102558.jpg",
    "lab-operacao-02.webp": LUCAS_PHOTOS / "20260902_102623.jpg",
    "reator-operacao-01.webp": LUCAS_PHOTOS / "20260902_103839.jpg",
    "reator-operacao-02.webp": LUCAS_PHOTOS / "20260902_103857.jpg",
}

for name, source in photos.items():
    export_photo(source, name)

print(f"Prepared {len(plans)} plans, {len(assets)} concepts and {len(photos)} real photos")
