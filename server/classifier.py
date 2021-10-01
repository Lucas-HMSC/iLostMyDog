import tensorflow as tf
import sys

tf.compat.v1.disable_v2_behavior()

# Varíaveis Globais
tf.compat.v1.flags.DEFINE_string("image_path", "./images/image1.jpg", "Image to be classified")
label_path = './retrained_labels.txt'
model_path = './retrained_graph.pb'

FLAGS = tf.compat.v1.flags.FLAGS
FLAGS(sys.argv)

image = tf.compat.v1.gfile.FastGFile(FLAGS.image_path, 'rb').read()
labels = [line.rstrip() for line in tf.compat.v1.gfile.GFile("retrained_labels.txt")]

with tf.compat.v1.gfile.FastGFile(model_path, 'rb') as f:
    graph_def = tf.compat.v1.GraphDef()
    graph_def.ParseFromString(f.read())
    tf.import_graph_def(graph_def, name='')


with tf.compat.v1.Session() as sess:
    softmax_tensor = sess.graph.get_tensor_by_name('final_result:0')
    
    # Realiza a predição com base no modelo
    predictions = sess.run(softmax_tensor, {'DecodeJpeg/contents:0': image})
    
    # Ordena os labels para colocar no topo a raça com maior porcentual de semelhança
    top_k = predictions[0].argsort()[-len(predictions[0]):][::-1]

    # Imprime todas as porcentagens de todas as 5 raças
    # for node_id in top_k:
    #   human_string = labels[node_id]
    #   score = predictions[0][node_id]
    #   print('%s (score = %.5f)' % (human_string, score))

    # Imprime somente o nome da raça
    human_string = labels[top_k[0]]
    print(human_string)
