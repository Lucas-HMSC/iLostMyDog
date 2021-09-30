import tensorflow as tf
import sys
import numpy as np

tf.compat.v1.disable_v2_behavior()

# Global variables
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
    
    # predict
    predictions = sess.run(softmax_tensor, {'DecodeJpeg/contents:0': image})
    
    # Sort to show labels of first prediction in order of confidence
    top_k = predictions[0].argsort()[-len(predictions[0]):][::-1]
    
    for node_id in top_k:
        human_string = labels[node_id]
        score = predictions[0][node_id]
        print('%s (score = %.5f)' % (human_string, score))
